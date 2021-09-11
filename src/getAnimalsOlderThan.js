const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.some((specie) => specie.name === animal && specie
    .residents.every((checkAge) => checkAge.age > age));
}

module.exports = getAnimalsOlderThan;
