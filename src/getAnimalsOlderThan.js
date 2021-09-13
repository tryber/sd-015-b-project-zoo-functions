const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.filter((elemento, index) => elemento.residents.age);
}
console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;
