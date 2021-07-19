const Joi = require("joi");

const schema = Joi.object({
  orgId: Joi.number().required(),
  name: Joi.string().required(),
  location: Joi.array().items(
    Joi.object({
      lat: Joi.number().required(),
      long: Joi.number().required(),
    })
  ),
});

module.exports = schema;
