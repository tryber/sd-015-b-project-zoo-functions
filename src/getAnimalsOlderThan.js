const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(name, age) {
  // seu código aqui
  return species.find((specie) => specie.name === name)
    .residents.every((animal) => animal.age >= age);
}

module.exports = getAnimalsOlderThan;
