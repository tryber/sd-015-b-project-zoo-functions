const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const findAnimal = species.find((crrAnimal) => crrAnimal.name === animal).residents;
  return findAnimal.every((personAnimal) => personAnimal.age >= age);
}

module.exports = getAnimalsOlderThan;
