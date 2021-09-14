const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const { species } = data;
  const chosenAnimalResidents = species.find((obj) => obj.name === animal).residents;

  return chosenAnimalResidents.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
