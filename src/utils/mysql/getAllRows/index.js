const getAllRows = async (model, where) => {
  const response = await model.findAll(where);
  return response;
};

module.exports = getAllRows;
