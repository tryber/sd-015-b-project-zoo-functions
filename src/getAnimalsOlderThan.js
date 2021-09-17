const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.filter((specie) => specie.name === animal)
    .map((element) => element.residents
      .every((resident) => resident.age >= age))[0];
}

module.exports = getAnimalsOlderThan;
