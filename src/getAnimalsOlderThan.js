const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species
    .find((specie) => (specie.name === animal)).residents
    .every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
