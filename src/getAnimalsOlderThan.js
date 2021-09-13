const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const selectedAnimal = data.species.find((animals) => animals.name === animal);
  return selectedAnimal.residents.every((currentAnimal) => currentAnimal.age > age);
}

module.exports = getAnimalsOlderThan;
