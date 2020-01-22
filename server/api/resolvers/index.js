/**
 *  @TODO: Handling Server Errors
 *
 *  Once you've completed your pg-resource.js methods and handled errors
 *  use the ApolloError constructor to capture and return errors from your resolvers.
 *
 *  Throwing ApolloErrors from your resolvers is a nice pattern to follow and
 *  will help you easily debug problems in your resolving functions.
 *
 *  It will also help you control th error output of your resource methods and use error
 *  messages on the client! (More on that later).
 *
 *  The user resolver has been completed as an example of what you'll need to do.
 *  Finish of the rest of the resolvers when you're ready.
 */

const queryResolvers = require("./queries");
const mutationResolvers = require("./mutations");
const relationResolvers = require("./relationResolvers");

// const { DateScalar } = require("../custom-types");

module.exports = app => {
  return {
    // Date: DateScalar,
    Query: queryResolvers(app),
    Mutation: mutationResolvers(app),
    ...relationResolvers,
  };
};
