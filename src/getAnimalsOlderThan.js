const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find(animalName => animalName === animal).residents.every(animalSpecie => animalSpecie.age >= age);
}

module.exports = getAnimalsOlderThan;
