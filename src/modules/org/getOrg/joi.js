const Joi = require("joi");

const schema = Joi.object({
  id: Joi.number().required(),
});

module.exports = schema;
