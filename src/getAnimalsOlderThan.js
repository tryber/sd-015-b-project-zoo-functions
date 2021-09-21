const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.some((specie) => specie.name === animal
    && specie.residents.every((resident) => resident.age >= age));
}

module.exports = getAnimalsOlderThan;
