const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const specieByName = species.find((speciesName) => speciesName.name === animal);
  const animalsOlderThan = specieByName.residents.every((speciesAge) => speciesAge.age > age);
  return animalsOlderThan;
}

module.exports = getAnimalsOlderThan;
