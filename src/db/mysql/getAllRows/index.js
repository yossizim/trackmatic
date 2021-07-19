const getAllRows = async (model) => {
  const response = await model.findAll();
  return response;
};

module.exports = getAllRows;
