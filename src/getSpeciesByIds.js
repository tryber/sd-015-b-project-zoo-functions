const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const speciesById = ids.map((id) => data.species.find((specie) => specie.id === id));
  return speciesById;
}

module.exports = getSpeciesByIds;
