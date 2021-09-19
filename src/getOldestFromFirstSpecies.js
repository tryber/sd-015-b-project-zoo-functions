const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeeById = data.employees.find((employee) => employee.id === id);
  const firstSpeciesManaged = employeeById.responsibleFor[0];
  const animal = data.species.find((specie) => specie.id === firstSpeciesManaged);
  const residentsArray = animal.residents.sort((element1, element2) => element1.age - element2.age);
  const oldestAnimal = residentsArray[residentsArray.length - 1];
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
