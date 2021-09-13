const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const animals = species.find((specie) => (specie.name === animal));

  const verifyAge = animals.residents.every((resident) => resident.age > age);

  return verifyAge;
}

module.exports = getAnimalsOlderThan;
