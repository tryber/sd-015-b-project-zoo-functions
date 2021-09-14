const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const specieById = species.filter((specie) => ids.includes(specie.id));
  return specieById;
}

module.exports = getSpeciesByIds;
