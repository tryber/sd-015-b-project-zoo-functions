const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const bixo = species.find((especie) => especie.name === animal);
  return bixo.residents.every((especie) => especie.age >= age);
}

module.exports = getAnimalsOlderThan;
