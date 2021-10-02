const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const findFirstId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const findAnimalSpecie = species.find((specie) => specie.id === findFirstId).residents;
  // const oldestAnimal = findAnimalSpecie.sort((ageX, ageY) => ageX.age - ageY.age)[0];
  const oldestAnimal = findAnimalSpecie.sort((ageX, ageY) => ageY.age - ageX.age)[0];

  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
