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
