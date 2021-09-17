const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getSpeciesName = species.find((species) => species.name === animal);
  const getAnimalsByAge = getSpeciesName.residents.every((species) => species.age > age);
  return getAnimalsByAge;
}

module.exports = getAnimalsOlderThan;
