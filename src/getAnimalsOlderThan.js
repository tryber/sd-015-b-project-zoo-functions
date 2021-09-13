const data = require('../data/zoo_data');

function getAnimalsOlderThan(animalName, animalAge) {
  const currentSpecie = data.species.find((animal) => animal.name === animalName);
  return currentSpecie.residents.every((currentAnimal) => currentAnimal.age > animalAge);
}

module.exports = getAnimalsOlderThan;
