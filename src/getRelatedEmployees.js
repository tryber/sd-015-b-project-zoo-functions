const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((employee) => employee.managers.some((managerId) => id === managerId));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const related = employees.filter((employee) => employee.managers
    .some((managers) => managers === managerId));
  return related.map((names) => `${names.firstName} ${names.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
