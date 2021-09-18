const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const ageAnimal = species.find((specie) => specie.name === animal);
  return ageAnimal.residents.every((animalResident) => animalResident.age > age);
}

module.exports = getAnimalsOlderThan;
