const {
  mysql: { fullDbSchema, updateRow },
} = require("../../../utils");
const schema = require("./schema");

const updateGroup = async (input) => {
  const { value } = await schema.validate(input);
  const dbConn = await fullDbSchema();
  const response = await updateRow(dbConn.models.Group, value);
  return response;
};

module.exports = updateGroup;
