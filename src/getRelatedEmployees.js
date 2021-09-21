const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const findEmployeeManager = employees.find((emp) => emp.id === id).managers;
  const verify = findEmployeeManager.some((ids) => ids === '9e7d4524-363c-416a-8759-8aa7e50c0992');

  return verify;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

console.log(isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

module.exports = { isManager, getRelatedEmployees };
