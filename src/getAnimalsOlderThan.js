const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(name, age) {
  // seu código aqui
  const findAnimal = species.find((animal) => animal.name === name);

  return findAnimal.residents.every((animal) => animal.age >= age);
}

module.exports = getAnimalsOlderThan;
