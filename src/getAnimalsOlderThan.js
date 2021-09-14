const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const findSpecie = (specie) => specie.name === animal.toLowerCase();
  const foundSpecie = data.species.find(findSpecie);
  const checkAge = (individual) => individual.age >= age;
  const checkedAges = foundSpecie.residents.every(checkAge);
  return checkedAges;
}

module.exports = getAnimalsOlderThan;
