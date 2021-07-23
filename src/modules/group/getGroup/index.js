const {
  mysql: { fullDbSchema, getRow },
} = require("../../../utils");

const getGroup = async (id) => {
  const dbConn = await fullDbSchema();
  const response = await getRow(dbConn.models.Group, id);
  return response;
};

module.exports = getGroup;
