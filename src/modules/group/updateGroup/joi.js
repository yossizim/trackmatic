const Joi = require("joi");
const schema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
});

module.exports = schema;
