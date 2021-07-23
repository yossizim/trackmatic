const { org, group, site } = require("../../modules");

module.exports = {
  Query: {
    getOrg: (_, { id }) => org.getOrg(id),
  },
  Mutation: {
    createOrg: (_, { input }) => org.createOrg(input),
    updateOrg: (_, { input }) => org.updateOrg(input),
  },
  Org: {
    group: (parent) => group.getGroup(parent.groupId),
    sites: (parent, { query }) => site.getOrgSites(parent.id, query),
  },
};
