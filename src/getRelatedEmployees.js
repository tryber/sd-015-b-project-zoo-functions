const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}

function employeesByManager(managerId) {
  return employees.reduce((acc, curr) => ((curr.managers.includes(managerId))
    ? acc.concat(`${curr.firstName} ${curr.lastName}`) : acc), []);
}
function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === true) {
    return employeesByManager(managerId);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
