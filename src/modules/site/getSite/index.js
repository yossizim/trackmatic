const {
  mysql: { fullDbSchema, getRow },
} = require("../../../utils");

const getSite = async (id) => {
  const dbConn = await fullDbSchema();
  const response = await getRow(dbConn.models.Site, id);
  return response;
};

module.exports = getSite;
