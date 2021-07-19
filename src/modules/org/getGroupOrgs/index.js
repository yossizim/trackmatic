const fullDbSchema = require("../../../db/mysql/fullDbSchema");
const getDerivatives = require("../../../db/mysql/getDerivatives");
const schema = require("./schema");
const getGroupOrgs = async (input) => {
  const { value } = await schema.validate(input);
  const dbConn = fullDbSchema();
  const response = await getDerivatives(dbConn.models.Org, value);
  return response;
};

module.exports = getGroupOrgs;
