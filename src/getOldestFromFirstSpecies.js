const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((emp) => emp.id === id);
  const firstSpecieId = employee.responsibleFor[0];
  const firstSpecie = data.species.find((specie) => specie.id === firstSpecieId);
  const oldestResident = firstSpecie.residents.reduce((oldest, resident) => {
    if (resident.age > oldest.age) {
      return resident;
    }
    return oldest;
  });
  return [oldestResident.name, oldestResident.sex, oldestResident.age];
}

module.exports = getOldestFromFirstSpecies;
