const fullDbSchema = require("../../../db/mysql/fullDbSchema");
const createRow = require("../../../db/mysql/createRow");
const schema = require("./joi");

const createSite = async (input) => {
  const { value } = await schema.validate(input);
  const dbConn = await fullDbSchema();
  const response = await createRow(dbConn.models.Site, value);
  return response;
};

module.exports = createSite;
