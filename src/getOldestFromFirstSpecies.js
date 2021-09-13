const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const employeeFilter = employees.find((employee) => employee.id === id);
  const firstSpecie = employeeFilter.responsibleFor[0];
  const specieFilter = species.find((specie) => specie.id === firstSpecie);
  const specieResidents = specieFilter.residents;
  const oldestAnimal = specieResidents.sort((a, b) => b.age - a.age)[0];
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
