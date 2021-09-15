const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find(({ name }) => name === animal)
    .residents.every((elemento) => elemento.age >= age);
}

module.exports = getAnimalsOlderThan;
