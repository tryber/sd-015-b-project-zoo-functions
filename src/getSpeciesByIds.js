const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const idAnimais = species.filter((animal) => ids.includes(animal.id));
  return idAnimais;
}

module.exports = getSpeciesByIds;
