const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.find((id) => specie.id === id));
  // return result;
}

module.exports = getSpeciesByIds;
