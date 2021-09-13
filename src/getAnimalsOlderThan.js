const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalSelected = species.find((specie) => specie.name === animal);
  return animalSelected.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
