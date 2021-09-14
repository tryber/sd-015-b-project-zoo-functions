const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getAnimals = data.species.find((specie) => specie.name === animal);
  return getAnimals.residents.every((animalAge) => animalAge.age >= age);
}
module.exports = getAnimalsOlderThan;
