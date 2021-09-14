const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const filteredSpecies = data.species.filter(({ id }) => ids.includes(id));

  return filteredSpecies;
}

module.exports = getSpeciesByIds;
