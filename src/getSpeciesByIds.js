const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const condition = (specie) => ids.includes(specie.id);
  const filteredSpecies = species.filter(condition);
  return filteredSpecies;
}

module.exports = getSpeciesByIds;
