const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const animalId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const animals = species.find((specie) => specie.id === animalId).residents;
  const oldAnimals = animals.sort((ageOne, ageTwo) => ageTwo.age - ageOne.age)[0];
  return Object.values(oldAnimals);
}

module.exports = getOldestFromFirstSpecies;
