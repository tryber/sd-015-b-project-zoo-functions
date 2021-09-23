const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const teamManger = [];
  if (isManager(managerId)) {
    data.employees.filter((employee) => employee.managers.includes(managerId))
      .forEach((person) => teamManger.push(`${person.firstName} ${person.lastName}`));
    return teamManger;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
