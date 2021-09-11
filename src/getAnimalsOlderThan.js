const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const findSpecie = data.species.find((species) => species.name === animal);
  return findSpecie.residents.every((resident) => resident.age > age);
}

module.exports = getAnimalsOlderThan;
