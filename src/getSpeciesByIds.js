const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map((idForSpecie) => species.find((specieInData) => specieInData.id === idForSpecie));
}

module.exports = getSpeciesByIds;
