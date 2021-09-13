const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const selectedAnimal = species.filter((element) => element.name === animal);
  return selectedAnimal[0].residents.every((member) => member.age >= age);
}

module.exports = getAnimalsOlderThan;
