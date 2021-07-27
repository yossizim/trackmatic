const {
  mysql: { fullDbSchema, getAllRows, getDerivatives },
} = require("../../../utils");

const getGroups = async (query = {}) => {
  const dbConn = await fullDbSchema();
  const where = getDerivatives(query);
  const response = await getAllRows(dbConn.models.Group, where);
  return response;
};

module.exports = getGroups;
