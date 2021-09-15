const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(especie, age) {
  const animal1 = species.find((Animal) => Animal.name === especie);
  return animal1.residents.every((animal) => animal.age >= age);
}
getAnimalsOlderThan('lions', 14);
module.exports = getAnimalsOlderThan;
