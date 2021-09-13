const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalToCheck = species.find((element) => element.name === animal);
  const { residents } = animalToCheck;
  return residents.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
