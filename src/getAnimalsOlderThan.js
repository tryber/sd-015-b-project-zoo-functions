// const { name } = require('faker');
const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const finderAnimal = species.find((element) => element.name === animal).residents;
  const checkAge = finderAnimal.every((specie) => specie.age >= age);
  return checkAge;
}

module.exports = getAnimalsOlderThan;
