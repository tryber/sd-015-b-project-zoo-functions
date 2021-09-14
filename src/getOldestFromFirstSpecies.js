const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const selectedEmployee = data.employees.find((employee) => employee.id === id);
  const residentId = selectedEmployee.responsibleFor[0];
  const selectedResident = data.species.find((specie) => specie.id === residentId);
  let olderAge = 0;
  let olderResident = [];
  selectedResident.residents.forEach((resident) => {
    if (resident.age > olderAge) {
      olderAge = resident.age;
      olderResident = [];
      olderResident.push(resident.name);
      olderResident.push(resident.sex);
      olderResident.push(resident.age);
    }
  });
  return olderResident;
}

module.exports = getOldestFromFirstSpecies;
