const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const responsibleFor = employees.find((element) => element.id === id);
  const animalTarget = responsibleFor.responsibleFor[0];
  const animalFound = species.find((animal) => animal.id === animalTarget);
  const oldestAnimal = animalFound.residents.sort((a, b) => b.age - a.age);
  return Object.values(oldestAnimal[0]);
}
module.exports = getOldestFromFirstSpecies;
