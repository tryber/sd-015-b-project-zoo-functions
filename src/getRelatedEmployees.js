const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const manager = isManager(managerId);
  if (!manager) { throw new Error('O id inserido não é de uma pessoa colaboradora gerente!'); }
  const relatedEmployees = [];
  employees.forEach((employee) => {
    if (employee.managers.includes(managerId)) {
      relatedEmployees.push(`${employee.firstName} ${employee.lastName}`);
    }
  });
  return relatedEmployees;
}

module.exports = { isManager, getRelatedEmployees };
