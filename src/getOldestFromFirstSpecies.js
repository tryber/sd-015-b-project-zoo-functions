const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const responsableFor = data.employees.find((personId) => personId.id === id).responsibleFor[0];
  const oldestAnimal = data.species.find((animal) =>
    animal.id === responsableFor).residents.sort((a, b) => b.age - a.age)[0];
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
