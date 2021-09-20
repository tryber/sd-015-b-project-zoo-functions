const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find(({ name }) => name === animal).residents
    .every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
