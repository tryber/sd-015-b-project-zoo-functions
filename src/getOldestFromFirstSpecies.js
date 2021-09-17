const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const selectEmployee = data.employees.find((employee) => employee.id === id);
  const firstSpecie = selectEmployee.responsibleFor[0];
  const selectSpecie = data.species.find((specie) => specie.id === firstSpecie);
  const specieResidents = selectSpecie.residents;
  const oldestAnimal = specieResidents.sort((a, b) => b.age - a.age)[0];
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
