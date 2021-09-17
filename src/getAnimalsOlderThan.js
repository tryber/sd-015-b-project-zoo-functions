const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const selectedAnimal = data.species.find((element) => element.name === animal);
  return selectedAnimal.residents.every((element) => element.age > age);
}

const actual = getAnimalsOlderThan('penguins', 10);
console.log(actual);
module.exports = getAnimalsOlderThan;
