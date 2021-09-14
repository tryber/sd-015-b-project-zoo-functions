const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === true) {
    return employees.filter((employee) => employee.managers.includes(managerId))
      .map((name) => `${name.firstName} ${name.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
