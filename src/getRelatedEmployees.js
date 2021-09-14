const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers.includes(id))
}

function getRelatedEmployees(managerId) {
  const teste = isManager(managerId);
  // seu código aqui
  if (!teste) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees.filter((employee) => employee.managers.includes(managerId))
    .map((employee) => `${employee.firstName} ${employee.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
