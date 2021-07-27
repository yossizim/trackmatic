const {
  mysql: { fullDbSchema, getRow },
} = require("../../../utils");

const getOrg = async (id) => {
  const dbConn = await fullDbSchema();
  const response = await getRow(dbConn.models.Org, id);
  return response;
};

module.exports = getOrg;
