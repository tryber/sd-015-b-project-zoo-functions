const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const filteredSpecie = species.filter((specie) => specie.name === animal);
  const individuos = filteredSpecie[0].residents;
  return individuos.every((individuo) =>
    individuo.age >= age);
}

module.exports = getAnimalsOlderThan;
