const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
    const checkSpecie = species.find((specie) => specie.name === animal);
  
    const checkAge = checkSpecie.residents.every((resident) => resident.age >= age);
    return checkAge;
  }

module.exports = getAnimalsOlderThan;
