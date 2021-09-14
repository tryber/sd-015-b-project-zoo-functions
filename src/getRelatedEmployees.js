const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.find((gerente) => gerente.id === id);
}
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
}

module.exports = { isManager, getRelatedEmployees };
