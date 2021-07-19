const { group, org } = require("../../modules");

module.exports = {
  Query: {
    getGroup: (_, { id }, ctx, info) => group.getGroup(id),
    getGroups: (_, { query }, ctx, info) => group.getGroups(query),
  },
  Mutation: {
    createGroup: (_, { input }, ctx, info) => group.createGroup(input),
    updateGroup: (_, { input }, ctx, info) => group.updateGroup(input),
  },
  Group: {
    orgs: (parent, args, ctx, info) => {
      org.getGroupOrgs(parent.id);
    },
  },
};
