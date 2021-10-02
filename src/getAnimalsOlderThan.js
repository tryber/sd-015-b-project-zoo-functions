const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animals, age) {
  return species.find((animal) => animal.name === animals)
    .residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
