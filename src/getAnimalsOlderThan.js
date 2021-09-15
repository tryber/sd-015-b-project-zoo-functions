const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specie = data.species.find((sp) => sp.name === animal);
  return specie.residents.every((individual) => individual.age >= age);
}

module.exports = getAnimalsOlderThan;
