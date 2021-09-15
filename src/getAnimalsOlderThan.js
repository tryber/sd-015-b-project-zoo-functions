const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalObj = species.find((specie) => specie.name === animal);
  const ageMinimum = animalObj.residents.every((resident) =>
    resident.age >= age);
  return ageMinimum;
}

module.exports = getAnimalsOlderThan;
