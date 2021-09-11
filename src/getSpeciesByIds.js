const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((specie) => specie.id === id));
}

module.exports = getSpeciesByIds;
