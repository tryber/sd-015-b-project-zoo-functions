const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// const getSpeciesByIds = require('./getSpeciesByIds');

function getAnimalsOlderThan(especie, age) {
  // seu código aqui
  const animal1 = species.find((Animal) => Animal.name === especie);
  return animal1.residents.every((animal) => animal.age >= age);
}
getAnimalsOlderThan('lions', 14);
module.exports = getAnimalsOlderThan;
