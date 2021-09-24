const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((specieById) => ids.includes(specieById.id));
}

module.exports = getSpeciesByIds;
// rest para cumprir requisitos de array vazio e sequentes
