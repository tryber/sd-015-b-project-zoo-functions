const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find((specie) => specie.name === animal).residents;
  return animals.every((elemento) => elemento.age >= age);
}
module.exports = getAnimalsOlderThan;
