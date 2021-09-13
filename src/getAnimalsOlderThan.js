const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalRequired = species.find((specie) => specie.name === animal);
  return animalRequired.residents.every((animalAge) => animalAge.age > age);
}

module.exports = getAnimalsOlderThan;
