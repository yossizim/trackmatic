const fullDbSchema = require("../../../db/mysql/fullDbSchema");
const updateRow = require("../../../db/mysql/updateRow");
const schema = require("./joi");
const updateSite = async (input) => {
  const { value } = await schema.validate(input);
  const dbConn = await fullDbSchema();
  const response = await updateRow(dbConn.models.Site, value);
  return response;
};

module.exports = updateSite;
