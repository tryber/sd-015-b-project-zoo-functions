const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  let animalsOlderThan = [];
  const specieByName = species.find((speciesName) => speciesName.name === animal);
  animalsOlderThan = specieByName.residents.every((speciesAge) => speciesAge.age > age);
  return animalsOlderThan;
}

module.exports = getAnimalsOlderThan;
