const Joi = require("joi");

const schema = Joi.object({
  orgId: Joi.number().required(),
  id: Joi.number().required(),
});
module.exports = schema;
