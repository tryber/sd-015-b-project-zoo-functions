const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { species, employees } = data;
  const employeeFound = employees.find((employee) => employee.id === id);
  const firstSpecie = species.find((specie) => specie.id === employeeFound.responsibleFor[0]);
  const animal = firstSpecie.residents.sort((animalA, animalB) => animalB.age - animalA.age)[0];

  return Object.values(animal);
}

module.exports = getOldestFromFirstSpecies;
