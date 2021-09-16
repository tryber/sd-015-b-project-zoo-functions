const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((kind) => kind.name === animal)
    .residents.every((creature) => creature.age >= age);
}

module.exports = getAnimalsOlderThan;
