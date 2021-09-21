const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.filter((animalObj) => animalObj.name === animal)
    .map((ageAnimal) => ageAnimal.residents.every((resident) => resident.age > age)).shift();
}

module.exports = getAnimalsOlderThan;
