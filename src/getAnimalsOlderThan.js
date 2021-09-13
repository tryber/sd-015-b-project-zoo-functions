const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animais = species.find((specie) => specie.name === animal);
  return animais.residents.every((resid) => resid.age >= age);
}

module.exports = getAnimalsOlderThan;
