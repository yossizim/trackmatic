const {
  mysql: { fullDbSchema, updateRow },
} = require("../../../utils");
const schema = require("./schema");

const updateOrg = async (input) => {
  const { value } = await schema.validate(input);
  const dbConn = await fullDbSchema();
  const response = await updateRow(dbConn.models.Org, value);
  return response;
};

module.exports = updateOrg;
