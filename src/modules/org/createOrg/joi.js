const Joi = require("joi");
const schema = Joi.object({
  groupId: Joi.number().required(),
  name: Joi.string().required(),
});
module.exports = schema;
