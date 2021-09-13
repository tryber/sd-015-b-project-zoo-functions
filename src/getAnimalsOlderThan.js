const data = require('../data/zoo_data');

const { species } = data;
function getAnimalsOlderThan(animal, age) {
  const currentAnimal = species.find((specie) => specie.name === animal);
  return currentAnimal.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
