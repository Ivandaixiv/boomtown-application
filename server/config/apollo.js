const {
  ApolloServer
} = require("apollo-server-express");
const {
  makeExecutableSchema
} = require("graphql-tools");

const typeDefs = require("../api/schema");
let resolvers = require("../api/resolvers");

module.exports = ({
  app,
  pgResource
}) => {
  resolvers = resolvers(app);

  // https://www.apollographql.com/docs/apollo-server/v2/api/graphql-tools.html#makeExecutableSchema

  const schema = makeExecutableSchema({ typeDefs, resolvers });
  // -------------------------------

  const apolloServer = new ApolloServer({
    context: ({
      req
    }) => {
      // @TODO: Uncomment this later when we add auth (to be added to Apollo's context)
      // const tokenName = app.get("JWT_COOKIE_NAME")
      // const token = req ? req.cookies[tokenName] : undefined
      // let user = null
      // -------------------------------
      try {
        // TODO:
        // If there is a token, verify that token to get user info and assign it to user variable
        // return req, token, user, pgResource
        return {
          req,
          pgResource
        }
      } catch (e) {
        throw new Error(e);
      }
    },
    schema,
  });

  apolloServer.applyMiddleware({
    app,
    cors: app.get("CORS_CONFIG")
  });
};