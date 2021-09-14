const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const verifyManager = employees.some((employee) => employee.managers.includes(id));
  return verifyManager;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  let result = [];
  if (isManager(managerId) === true) {
    const employeesList = employees.filter((employee) => employee.managers.includes(managerId));
    employeesList.forEach((employee) => result.push(`${employee.firstName} ${employee.lastName}`));
    return result;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
