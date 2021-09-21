const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const findSpecie = ids.map((id) => species.find((specie) => specie.id === id));
  return findSpecie;
}

module.exports = getSpeciesByIds;
