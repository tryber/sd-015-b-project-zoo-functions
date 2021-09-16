const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const selectedSpecies = species.find((_species) => _species.name === animal);
  return selectedSpecies.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
