const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeeObj = data.employees.find((employee) => employee.id === id);
  const firstSpecieId = employeeObj.responsibleFor[0];
  const firstSpecie = data.species.find((specie) => specie.id === firstSpecieId);
  const sortedResidents = firstSpecie.residents.sort((a, b) => b.age - a.age);
  const olderResidentObj = sortedResidents[0];
  const olderResidentList = [olderResidentObj.name, olderResidentObj.sex, olderResidentObj.age];
  return olderResidentList;
}

module.exports = getOldestFromFirstSpecies;
