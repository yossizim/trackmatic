const { org, group, site } = require("../../modules");

module.exports = {
  Query: {
    getOrg: (parent, { id }, ctx, info) => org.getOrg(id),
  },
  Mutation: {
    createOrg: (parent, { input }, ctx, info) => org.createOrg(input),
    updateOrg: (parent, { input }, ctx, info) => org.updateOrg(input),
  },
  Org: {
    group: (parent, args, ctx, info) => group.getGroup(parent.groudId),
    sites(parent, args, ctx, info) {
      return sites.filter((site) => {
        return site.org === parent.id;
      });
    },
  },
};
