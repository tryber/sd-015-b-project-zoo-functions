const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const findAnimal = data.species.find((element) => element.name === animal);
  const everyAnimal = findAnimal.residents.every((element) => element.age > age);
  return everyAnimal;
}

module.exports = getAnimalsOlderThan;
