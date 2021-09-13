const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.some(({ name, residents }) => name === animal
  && residents.every((resident) => resident.age > age));
}

module.exports = getAnimalsOlderThan;
