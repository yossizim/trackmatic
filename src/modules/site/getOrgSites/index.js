const {
  mysql: { fullDbSchema, getDerivatives, getAllRows },
} = require("../../../utils");

const getOrgSites = async (orgId, query = {}) => {
  const dbConn = await fullDbSchema();
  const where = { orgId, ...getDerivatives(query) };
  const response = await getDerivatives(dbConn.models.Site, where);
  return response;
};

module.exports = getOrgSites;
