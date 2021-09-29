const data = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

function getOldestFromFirstSpecies(id) {
  const employeeResponsibleFor = data.employees.find((employee) => (
    employee.id === id
  ));
  const { residents } = getSpeciesByIds(employeeResponsibleFor.responsibleFor[0])[0];
  residents.sort((a, b) => b.age - a.age);
  return Object.values(residents[0]);
}

module.exports = getOldestFromFirstSpecies;
