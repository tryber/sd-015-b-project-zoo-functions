const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const species = data.species.filter(({ id }) => ids.includes(id));
  return species;
}

module.exports = getSpeciesByIds;
