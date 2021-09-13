const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const valor = species.find((elemento) => elemento.name === animal);
  const { residents } = valor;
  return residents.every((elemento) => age < elemento.age);
}

module.exports = getAnimalsOlderThan;
