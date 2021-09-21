const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const findSpecie = (specie) => specie.name === animal.toLowerCase();
  const foundSpecie = species.find(findSpecie);
  const checkAge = (resident) => resident.age >= age;
  const checkedAges = foundSpecie.residents.every(checkAge);
  return checkedAges;
}

module.exports = getAnimalsOlderThan;
