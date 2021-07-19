const { Op, Sequelize } = require("sequelize");
const getAllRows = require("../getAllRows");
const { mergeAll } = require("ramda");
const getDerivatives = async (
  model,
  input,
  primaryKey = "id",
  returning = true
) => {
  model.findAll((primaryKey, input), {
    where: {
      [Op.or]: [
        {
          primaryKey: groupId,
        },
        { primaryKey: orgId },
      ],
    },
  });
  if (returning) {
    const response = await getAllRows(model, input[primaryKey]);
    return response;
  }
};

module.exports = getDerivatives;
//where: sequelize.where(sequelize.fn('char_length', sequelize.col('content')), 7)
// where: {
//   [Op.or]: [
//     { authorId: 12 },
//     { authorId: 13 }
//   ]
// }
