const { ApolloError } = require("apollo-server-express");
const { AuthenticationError } = require("apollo-server-express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function setCookie({ tokenName, token, res }) {
  res.cookie(tokenName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 3600 * 2 * 1000
  });
}

function generateToken(user, secret) {
  const { id, email, fullname, bio } = user; // Omit the password from the token
  const token = jwt.sign({ id, email, fullname, bio }, secret, {
    expiresIn: "2h"
  });
  return token;
}

const mutationResolvers = app => ({
  async signup(
    parent,
    { user: { fullname, email, password } },
    { pgResource, req }
  ) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await pgResource.createUser({
        fullname,
        email,
        password: hashedPassword
      });

      const token = generateToken(user, app.get("JWT_SECRET"));

      setCookie({
        tokenName: app.get("JWT_COOKIE_NAME"),
        token,
        res: req.res
      });

      return {
        token,
        user
      };
    } catch (e) {
      throw new AuthenticationError(e);
    }
  },

  async login(parent, { user: { email, password } }, { pgResource, req }) {
    try {
      const user = await context.pgResource.getUserAndPasswordForVerification(
        args.user.email
      );
      if (!user) throw "User was not found.";
      /**
       *  @TODO: Authentication - Server
       *
       *  To verify the user has provided the correct password, we'll use the provided password
       *  they submitted from the login form to decrypt the 'hashed' version stored in out database.
       */
      // Use bcrypt to compare the provided password to 'hashed' password stored in your database.
      const valid = false;
      // -------------------------------
      if (!valid) throw "Invalid Password";

      const token = generateToken(user, app.get("JWT_SECRET"));

      setCookie({
        tokenName: app.get("JWT_COOKIE_NAME"),
        token,
        res: req.res
      });

      return {
        token,
        user
      };
    } catch (e) {
      throw new AuthenticationError(e);
    }
  },

  logout(parent, args, context) {
    // context.req.res.clearCookie(app.get("JWT_COOKIE_NAME"));
    return true;
  },
  async addItem(parent, args, context, info) {
    try {
      const { pgResource } = context;
      const { item } = args;

      // const user = await jwt.decode(context.token, app.get("JWT_SECRET"));
      const newItem = await pgResource.saveNewItem({
        item: item,
        user: 1
      });
      return newItem;
    } catch (e) {
      throw new ApolloError(e);
    }
  }
});

module.exports = mutationResolvers;
