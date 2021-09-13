const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalMatch = data.species.find((elementAnimal) => elementAnimal.name === animal);
  return animalMatch.residents.every((animalOfSpecies) => animalOfSpecies.age > age);
}

module.exports = getAnimalsOlderThan;
