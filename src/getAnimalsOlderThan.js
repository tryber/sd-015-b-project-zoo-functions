const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const specieObj = data.species.find((specie) => specie.name === animal);
  const isOlderThan = specieObj.residents.every((resident) => resident.age >= age);
  return isOlderThan;
}

module.exports = getAnimalsOlderThan;
