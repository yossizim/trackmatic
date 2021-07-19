const fullDbSchema = require("../../../db/mysql/fullDbSchema");
const getRow = require("../../../db/mysql/getRow");
const schema = require("./joi");

const getSite = async (input) => {
  const { value } = await schema.validate(input);
  const dbConn = await fullDbSchema();
  const response = await getRow(dbConn.models.Site, value);
  return response;
};

module.exports = getSite;
