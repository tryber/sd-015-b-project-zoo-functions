const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((oneSpecies) => ids.includes(oneSpecies.id));
}

module.exports = getSpeciesByIds;
