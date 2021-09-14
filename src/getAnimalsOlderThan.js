const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = Object.values(data.species);
  const species = animals.find((specie) => specie.name === animal);
  const individual = species.residents.every((specie) => specie.age >= age);
  return individual;
}

module.exports = getAnimalsOlderThan;
