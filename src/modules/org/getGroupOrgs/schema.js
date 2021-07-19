const Joi = require("joi");

const schema = Joi.object({
  groupId: Joi.number().required(),
  id: Joi.number().required(),
});
module.exports = schema 