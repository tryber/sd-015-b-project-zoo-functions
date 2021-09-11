const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const specie = data.species.find(({name}) => name === animal);
  const isCorrectAge = specie.residents.every((resident) => resident.age >= age);
  return isCorrectAge;
}

module.exports = getAnimalsOlderThan;
