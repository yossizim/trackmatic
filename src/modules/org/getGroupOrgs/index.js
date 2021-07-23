const {
  mysql: { fullDbSchema, getDerivatives, getAllRows },
} = require("../../../utils");

const getGroupOrgs = async (groupId, query = {}) => {
  const dbConn = await fullDbSchema();
  const where = { groupId, ...getDerivatives(query) };
  const response = await getAllRows(dbConn.models.Org, where);
  return response;
};

module.exports = getGroupOrgs;
