const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animals = species.find((name) => name.name === animal);
  const animalResidence = animals.residents;
  return animalResidence.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
console.log(getAnimalsOlderThan('penguins', 10));
