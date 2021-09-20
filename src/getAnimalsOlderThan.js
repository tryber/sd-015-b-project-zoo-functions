const data = require('../data/zoo_data');

function getAnimalsOlderThan(animalName, age) {
  // seu código aqui
  const filteredAnimal = data.species.filter((animal) => animal.name === animalName);

  return filteredAnimal[0].residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
