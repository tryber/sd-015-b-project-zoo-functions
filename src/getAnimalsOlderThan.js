const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const currentAnimal = species.find((animals) => animals.name === animal);
  return currentAnimal.residents.every((element) => element.age > age);
}

module.exports = getAnimalsOlderThan;
