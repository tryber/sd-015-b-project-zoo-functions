const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species
    .find(({ name }) => name === animal)
    .residents.every((element) => element.age > age);
}

const actual = getAnimalsOlderThan('otters', 7);
console.log(actual);
module.exports = getAnimalsOlderThan;
