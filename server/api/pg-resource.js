function tagsQueryString(tags, itemid, result) {
  for (let i = tags.length; i > 0; i--) {
    result += `($${i}, ${itemid}),`;
  }
  return result.slice(0, -1) + ";";
}

module.exports = postgres => {
  return {
    async createUser({ fullname, email, password }) {
      const newUserInsert = {
        text: `INSERT INTO users( fullname,email, password) VALUES ($1, $2, $3) RETURNING *`,
        values: [fullname, email, password]
      };
      try {
        const user = await postgres.query(newUserInsert);
        return user.rows[0];
        // rows is a property of the returned object which contains the result return form the DB
      } catch (e) {
        switch (true) {
          case /users_fullname_key/.test(e.message):
            throw "An account with this username already exists.";
          case /users_email_key/.test(e.message):
            throw "An account with this email already exists.";
          default:
            throw "There was a problem creating your account.";
        }
      }
    },
    async getUserAndPasswordForVerification(email) {
      const findUserQuery = {
        text: "SELECT * FROM users WHERE email=$1",
        values: [email]
      };
      try {
        const user = await postgres.query(findUserQuery);
        if (!user) throw "User was not found.";
        return user.rows[0];
      } catch (e) {
        throw "User was not found.";
      }
    },
    async getUserById(id) {
      const findUserQuery = {
        text: `              
          SELECT * FROM users
          WHERE users.id = $1
        `,
        values: [id]
      };
      try {
        const user = await postgres.query(findUserQuery);
        if (!user) throw "User was not found";
        return user.rows[0];
      } catch (err) {
        throw err;
      }
    },
    async getItems(idToOmit) {
      const items = await postgres.query({
        text: `
          SELECT * FROM items
          WHERE ownerid != $1
        `,
        values: idToOmit ? [idToOmit] : []
      });
      try {
        if (!items) throw "Item could not be found";
        return items.rows;
      } catch (err) {
        throw err;
      }
    },
    async getItemsForUser(id) {
      try {
        const items = await postgres.query({
          text: `
              SELECT * FROM items
              WHERE ownerid = $1
          `,
          values: [id]
        });
        return items.rows;
      } catch (err) {
        throw err;
      }
    },
    async getBorrowedItemsForUser(id) {
      try {
        const items = await postgres.query({
          text: `
            SELECT * FROM items
            WHERE borrowerid = $1
            `,
          values: [id]
        });
        return items.rows;
      } catch (err) {
        throw err;
      }
    },
    async getTags() {
      try {
        const tags = await postgres.query(
          `
            SELECT * FROM tags
          `
        );
        return tags.rows;
      } catch (err) {
        throw err;
      }
    },
    async getTagsForItem(id) {
      try {
        const tagsQuery = {
          text: `
            SELECT * FROM tags 
            INNER JOIN itemtags 
            ON tags.id = itemtags.tagid 
            WHERE itemtags.itemid = $1
          `,
          values: [id]
        };
        const tags = await postgres.query(tagsQuery);
        return tags.rows;
      } catch (err) {
        throw err;
      }
    },
    async saveNewItem({ item, user }) {
      return new Promise((resolve, reject) => {
        postgres.connect((err, client, done) => {
          try {
            // Begin postgres transaction
            client.query("BEGIN", async err => {
              const { title, description, tags } = item;
              const insertItemQuery = {
                text: `
                  INSERT INTO items (title, description, ownerid) VALUES ($1, $2, $3) RETURNING *
                `,
                values: [title, description, user]
              };

              const newItem = await postgres.query(insertItemQuery);
              const itemId = newItem.rows[0].id;

              const insertTagQuery = {
                text: `
                  INSERT INTO itemtags (tagid, itemid) VALUES 
                  ${tagsQueryString([...tags], itemId, [])}
                `,
                values: tags.map(tag => tag.id)
              };
              await postgres.query(insertTagQuery);
              // Commit the entire transaction!
              client.query("COMMIT", err => {
                if (err) {
                  throw err;
                }
                // release the client back to the pool
                done();
                resolve(newItem.rows[0]);
                // -------------------------------
              });
            });
          } catch (e) {
            // Something went wrong
            client.query("ROLLBACK", err => {
              if (err) {
                throw err;
              }
              // release the client back to the pool
              done();
            });
            switch (true) {
              default:
                throw e;
            }
          }
        });
      });
    }
  };
};
