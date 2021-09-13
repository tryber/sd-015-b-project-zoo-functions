const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.some(({ name, residents }) => name === animal 
  && residents.every((resident) => resident.age > age));
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
