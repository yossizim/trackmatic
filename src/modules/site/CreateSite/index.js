const {
  mysql: { fullDbSchema, createRow },
} = require("../../../utils");
const schema = require("./schema");

const createSite = async (input) => {
  const { value } = await schema.validate(input);
  const dbConn = await fullDbSchema();
  const response = await createRow(dbConn.models.Site, value);
  return response;
};

module.exports = createSite;
