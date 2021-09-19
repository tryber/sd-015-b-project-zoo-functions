const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalCollection = data.species;
  const animalChosen = animalCollection.find((element) => animal === element.name);
  const result = animalChosen.residents.every((element) => element.age >= age);
  return result;
}

module.exports = getAnimalsOlderThan;
