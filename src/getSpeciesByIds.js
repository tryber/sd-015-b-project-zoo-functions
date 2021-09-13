const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...todosId) {
  // seu código aqui
  const idsAnimals = species.filter((animal) => todosId.includes(animal.id));
  return idsAnimals;
}

module.exports = getSpeciesByIds;
