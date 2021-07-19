const fullDbSchema = require("../../../db/mysql/fullDbSchema");
const getAllRows = require("../../../db/mysql/getAllRows");
const getGroups = async () => {
  const dbConn = fullDbSchema;
  const response = await getAllRows(dbConn.models.Group);
  return response;
};
module.exports = getGroups;
