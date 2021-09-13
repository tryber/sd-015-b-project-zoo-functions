const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return data.species.filter((animal) => ids.some((enterId) => enterId === animal.id));
}

module.exports = getSpeciesByIds;
