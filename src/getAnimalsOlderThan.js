const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const checkedSpecies = species.find((oneSpecies) => oneSpecies.name === animal);
  return checkedSpecies.residents.every((resident) => resident.age > age);
}

module.exports = getAnimalsOlderThan;
