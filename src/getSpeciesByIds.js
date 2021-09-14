const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...todosId) {
  // seu código aqui
  const idAnimais = species.filter((animal) => todosId.includes(animal.id));
  return idAnimais;
}

module.exports = getSpeciesByIds;
