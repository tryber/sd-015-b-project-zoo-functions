const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const filterSpecies = (specie) => ids.includes(specie.id);
  const filteredSpecie = species.filter(filterSpecies);
  return filteredSpecie;
}

module.exports = getSpeciesByIds;
