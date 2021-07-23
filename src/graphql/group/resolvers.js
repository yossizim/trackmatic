const { group, org } = require("../../modules");

module.exports = {
  Query: {
    getGroup: (_, { id }) => group.getGroup(id),
    getGroups: (_, { query }) => group.getGroups(query),
  },
  Mutation: {
    createGroup: (_, { input }) => group.createGroup(input),
    updateGroup: (_, { input }) => group.updateGroup(input),
  },
  Group: {
    orgs: (parent, { query }) => org.getGroupOrgs(parent.id, query),
  },
};
