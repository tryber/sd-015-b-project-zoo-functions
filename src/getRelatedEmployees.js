const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const { employees } = data;

  return employees.map((emp) => emp.managers
    .reduce((acc, manId) => manId), '');
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
