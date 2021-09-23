const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.filter((objAnimal) => objAnimal.name === animal)
    .map((idadeAnimal) => idadeAnimal.residents.every((resident) => resident.age > age)).shift();
}

module.exports = getAnimalsOlderThan;
