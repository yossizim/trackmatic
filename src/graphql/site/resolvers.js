const { site, org } = require("../../modules");
const group = require("../../modules/group");
module.exports = {
  Query: {
    getSite: (parent, { id }, ctx, info) => site.getSite(id),
  },
  Mutation: {
    createSite: (parent, { input }, ctx, info) => site.createSite(input),
    updateSite: (parent, { input }, ctx, info) => site.updateSite(input),
  },
  Site: {
    org: (parent, args, ctx, info) => org.getOrg(parent.orgId),
  },
};
