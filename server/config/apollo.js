const { ApolloServer } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const jwt = require("jsonwebtoken");
const typeDefs = require("../api/schema");
let resolvers = require("../api/resolvers");

module.exports = ({ app, pgResource }) => {
  resolvers = resolvers(app);

  // https://www.apollographql.com/docs/apollo-server/v2/api/graphql-tools.html#makeExecutableSchema

  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const apolloServer = new ApolloServer({
    context: ({ req }) => {
      const tokenName = app.get("JWT_COOKIE_NAME");
      const token = req ? req.cookies[tokenName] : undefined;
      let user = null;

      try {
        if (token) {
          user = jwt.verify(token, app.get("JWT_SECRET"));
        }
        return {
          req,
          pgResource,
          user,
          token
        };
      } catch (e) {
        throw new Error(e);
      }
    },
    schema
  });

  apolloServer.applyMiddleware({
    app,
    cors: app.get("CORS_CONFIG")
  });
};
