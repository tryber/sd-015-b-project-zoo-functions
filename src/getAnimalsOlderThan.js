const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, ages) {
  // seu código aqui
  return species.filter(({ name }) => name === animal)[0].residents.every(({ age }) => age >= ages);
}
console.log(getAnimalsOlderThan('lions', 1));

module.exports = getAnimalsOlderThan;
