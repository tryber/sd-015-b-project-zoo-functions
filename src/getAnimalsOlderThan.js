const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const selected = data.species.find((specie) => specie.name === animal);
  return selected.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
