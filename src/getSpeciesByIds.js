const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((animal) => ids.some((id) => animal.id === id));
}

module.exports = getSpeciesByIds;
