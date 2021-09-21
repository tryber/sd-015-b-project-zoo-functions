const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getSpeciesName = species.find((speciesName) => speciesName.name === animal);
  const getAnimalsByAge = getSpeciesName.residents.every((speciesAge) => speciesAge.age > age);
  return getAnimalsByAge;
}

module.exports = getAnimalsOlderThan;
