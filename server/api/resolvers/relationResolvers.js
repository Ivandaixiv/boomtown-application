const { ApolloError } = require("apollo-server");

const relationResolvers = {
  User: {
    /**
     *  @TODO: Advanced resolvers
     *
     *  The User GraphQL type has two fields that are not present in the
     *  user table in Postgres: items and borrowed.
     *
     *  According to our GraphQL schema, these fields should return a list of
     *  Items (GraphQL type) the user has lent (items) and borrowed (borrowed).
     *
     */
    // @TODO: Uncomment these lines after you define the User type with these fields
    async items(root, args, { pgResource }, info) {
      const items = await pgResource.getItemsForUser(root.id)
      return items;
    },
    async borrowed(root, args, { pgResource }, info) {
      const borrowed = await pgResource.getBorrowedItemsForUser(root.id);
      return borrowed;
    }
  },

  Item: {
    /**
     *  @TODO: Advanced resolvers
     *
     *  The Item GraphQL type has two fields that are not present in the
     *  Items table in Postgres: itemowner, tags and borrower.
     *
     * According to our GraphQL schema, the itemowner and borrower should return
     * a User (GraphQL type) and tags should return a list of Tags (GraphQL type)
     *
     */
    // @TODO: Uncomment these lines after you define the Item type with these fields
    async itemowner(root, args, { pgResource }, info) {
      try {
        const itemowner = await pgResource.getUserById(root.ownerid);
        return itemowner;
      } catch (e) {
        throw new ApolloError(e);
      }
    },
    async tags(root, args, { pgResource }, info) {
      try {
        const tags = await pgResource.getTagsForItem(root.id);
        return tags;
      } catch (e) {
        throw new ApolloError(e);
      }
    },
    async borrower(root, args, { pgResource }, info) {
      try {
        const borrower = await pgResource.getUserById(root.borrowerid);
        return borrower;
      } catch (e) {
        throw new ApolloError(e);
      }
    }
  }
};

module.exports = relationResolvers;
