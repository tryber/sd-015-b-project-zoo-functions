const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, ages) {
  const result = species
    .find((specie) => specie.name === animal)
    .residents.every(({ age }) => age >= ages);
  return result;
}
console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
