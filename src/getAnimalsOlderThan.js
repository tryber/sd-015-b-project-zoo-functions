const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = Object.values(data.species);
  const especies = animals.find((specie) => specie.name === animal);
  const individuos = especies.residents.every((specie) => specie.age >= age);
  return individuos;
}

module.exports = getAnimalsOlderThan;
