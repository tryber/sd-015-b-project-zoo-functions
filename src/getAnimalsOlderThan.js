const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.filter((spicie) => spicie.name === animal)[0].residents
    .every((objAnimal) => objAnimal.age >= age);
}

module.exports = getAnimalsOlderThan;
