const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const arrayId = ids;
  return arrayId.map((element) => species.find(({ id }) => id === element));
}

module.exports = getSpeciesByIds;
