const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const groupAnimal = data.species.find((specie) => specie.name === animal).residents;
  return groupAnimal.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
