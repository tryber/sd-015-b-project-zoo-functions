const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const ObjAnimal = species.find((str) => str.name === animal);
  return ObjAnimal.residents.every((specie) => specie.age > age);
}

module.exports = getAnimalsOlderThan;
