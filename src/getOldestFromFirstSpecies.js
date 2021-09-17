const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeeArr = employees.find((employee) => employee.id === id);
  const specieId = employeeArr.responsibleFor[0];
  const specieArr = species.find((specie) => specie.id === specieId);
  const oldestResident = specieArr.residents.reduce((oldest, resident) => {
    if (resident.age > oldest.age) return resident;
    return oldest;
  });
  return [oldestResident.name, oldestResident.sex, oldestResident.age];
}

module.exports = getOldestFromFirstSpecies;
