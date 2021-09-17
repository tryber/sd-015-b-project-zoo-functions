const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const animals = ids.map((id) => data.species.find((specie) => id === specie.id));
  return animals;
}

module.exports = getSpeciesByIds;
