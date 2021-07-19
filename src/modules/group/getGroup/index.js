const fullDbSchema = require("../../../db/mysql/fullDbSchema");
const getRow = require("../../../db/mysql/getRow");
const schema = require("./joi");

const getGroup = async (input) => {
  const { value } = await schema.validate(input);
  const dbConn = await fullDbSchema();
  const response = await getRow(dbConn.models.Group, value);
  return response;
};

module.exports = getGroup;
