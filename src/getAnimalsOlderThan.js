const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const objectAnimal = data.species.find((element) => element.name === animal);
  return objectAnimal.residents.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
