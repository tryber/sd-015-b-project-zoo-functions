const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function checkManager(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

function getRelatedEmployees(managerId) {
  checkManager(managerId);

  const relatedEmployees = employees.filter((employee) => employee.managers.includes(managerId));
  return relatedEmployees.map((employee) => `${employee.firstName} ${employee.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
