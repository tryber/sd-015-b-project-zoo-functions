const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const person = data.employees.filter((employee) => employee.managers.includes(managerId));

  return person.map((managed) => `${managed.firstName} ${managed.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
