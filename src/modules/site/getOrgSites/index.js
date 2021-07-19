const fullDbSchema = require("../../../db/mysql/fullDbSchema");
const getDerivatives = require("../../../db/mysql/getDerivatives");
const schema = require("./schema");
const getOrgSites = async (input) => {
  const { value } = await schema.validate(input);
  const dbConn = fullDbSchema();
  const response = await getDerivatives((await dbConn).models.Site, value);
  return response;
};

module.exports = getOrgSites;
