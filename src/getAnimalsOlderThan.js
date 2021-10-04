const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const specieFound = species.find((specie) => specie.name === animal);
  return specieFound.residents.every((resident) => resident.age >= age);
}
console.log(getAnimalsOlderThan('tigers', 16));

module.exports = getAnimalsOlderThan;
