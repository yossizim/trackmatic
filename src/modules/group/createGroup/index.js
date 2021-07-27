const {
  mysql: { fullDbSchema, createRow },
} = require("../../../utils");
const schema = require("./schema");

const createGroup = async (input) => {
  const { value } = await schema.validate(input);
  const dbConn = await fullDbSchema();
  const response = await createRow(dbConn.models.Group, value);
  return response;
};

module.exports = createGroup;
