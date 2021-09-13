const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((animal) => ids.some((id) => animal.id === id));
}

module.exports = getSpeciesByIds;
