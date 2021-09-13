const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animals, age) {
  const AnimalSpecie = species.find((animal) => animal.name === animals);
  return AnimalSpecie.residents.every((allAnimals) => allAnimals.age >= age);
}
// console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
