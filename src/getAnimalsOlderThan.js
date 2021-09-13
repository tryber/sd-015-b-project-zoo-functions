const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const objAnimal = species.find((specie) => specie.name === animal);
  const { residents } = objAnimal;

  const result = residents.every((resident) => resident.age >= age);

  return result;
}

console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;
