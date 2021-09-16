const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species
    .find((especie) => especie.name === animal)
    .residents.every((residente) => residente.age >= age);
}

module.exports = getAnimalsOlderThan;
