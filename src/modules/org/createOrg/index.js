const {
  mysql: { fullDbSchema, createRow },
} = require("../../../utils");
const schema = require("./joi");

const createOrg = async (input) => {
  const { value } = await schema.validate(input);
  const dbConn = await fullDbSchema();
  const response = await createRow(dbConn.models.Org, value);
  return response;
};

module.exports = createOrg;
