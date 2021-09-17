const data = require('../data/zoo_data');

const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const filterManager = employees.filter((employee) => employee.managers.includes(managerId));
    return filterManager.map((name) => `${name.firstName} ${name.lastName}`);
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
