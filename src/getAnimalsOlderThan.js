const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const findAnimal = species.find((element) => element.name === animal);
  const verifyAge = findAnimal.residents.every((element) => element.age > age);
  return verifyAge;
}

module.exports = getAnimalsOlderThan;
