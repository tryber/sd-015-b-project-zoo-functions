const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const getAnimal = species.find((specie, index) => animal.includes(specie.name));
  const getAge = getAnimal.residents.every((resident) => resident.age >= age);
  return getAge;
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
