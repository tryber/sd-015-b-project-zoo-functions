const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specie = species.find((specie1) => specie1.name === animal);
  return specie.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
