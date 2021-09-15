const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const verifyManager = employees.some((employee) => employee.managers.includes(id));
  return verifyManager;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const result = [];
  if (isManager(managerId) === true) {
    const employeesList = employees.filter((employee) => employee.managers.includes(managerId));
    employeesList.forEach((employee) => result.push(`${employee.firstName} ${employee.lastName}`));
    return result;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
