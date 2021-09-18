const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animais = species.find((especie) => especie.name === animal);
  return animais.residents.every((residents) => residents.age >= age);
}

module.exports = getAnimalsOlderThan;
