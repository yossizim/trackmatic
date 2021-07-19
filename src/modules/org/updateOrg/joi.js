const Joi = require("joi");

const schema = {
  id: Joi.number().required(),
  name: Joi.string().required(),
};
module.exports = schema;
