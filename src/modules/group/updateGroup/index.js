const fullDbSchema = require("../../../db/mysql/fullDbSchema");
const updateRow = require("../../../db/mysql/updateRow");
const schema = require("./joi");
const updateGroup = async (input) => {
  const { value } = await schema.validate(input);
  const dbConn = await fullDbSchema();
  const response = await updateRow(dbConn.models.Group, value);
  return response;
};

module.exports = updateGroup;
