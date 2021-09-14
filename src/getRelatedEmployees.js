const data = require('../data/zoo_data');

function isManager(id) {
  const employees = data.employees;
  const findEmployee = employees.find((employee) => employee.id === id)
  return findEmployee
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// module.exports = { isManager, getRelatedEmployees };
