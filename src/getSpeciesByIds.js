const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  const searchSpecies = species.filter((element) => ids.includes(element.id));
  return searchSpecies;
}

module.exports = getSpeciesByIds;
