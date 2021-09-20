const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return data.species.filter((specie) => ids.find((id) => id === specie.id));
}

module.exports = getSpeciesByIds;
