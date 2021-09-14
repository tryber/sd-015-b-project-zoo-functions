const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return ids.map((animalId) => data.species.find((specie) => specie.id === animalId));
}

module.exports = getSpeciesByIds;
