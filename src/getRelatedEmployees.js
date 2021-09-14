const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const itsManager = isManager(managerId);
  if (!itsManager) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const filteredEmployees = employees.filter((employee) => employee.managers.includes(managerId));

  return filteredEmployees.map((employee) =>
    `${employee.firstName} ${employee.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
