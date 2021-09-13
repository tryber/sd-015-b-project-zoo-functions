const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  return species.filter((animal) => ids.some((id) => animal.id === id));
}

module.exports = getSpeciesByIds;
