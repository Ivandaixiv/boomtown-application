const { ApolloError } = require("apollo-server");

const relationResolvers = {
  User: {
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
