const data = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  const filteredSpecies = data.species.filter((species) => species.id === ids);
  return filteredSpecies;
}

module.exports = getSpeciesByIds;
