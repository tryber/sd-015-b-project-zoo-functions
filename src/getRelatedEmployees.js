const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const managers = employees.filter((employee) => employee.managers.includes(managerId));
    const managersNames = managers.map((employee) => `${employee.firstName} ${employee.lastName}`);
    return managersNames;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
