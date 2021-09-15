const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const test = species.filter((elemento) => elemento.name === animal);
  const test2 = test.map((elemento) => elemento.residents);
  const resultado = test2[0].every((elemento) => elemento.age >= age);
  return resultado;
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
