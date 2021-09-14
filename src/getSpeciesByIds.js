const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  }
  // retornar especies referentes aos ids recebidos
  const selectedSpecies = species.filter((_species) => ids.includes(_species.id));
  return selectedSpecies;
}

module.exports = getSpeciesByIds;
