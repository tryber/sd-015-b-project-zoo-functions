const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const related = [];
  employees.forEach((employee) => {
    if (employee.managers.includes(managerId)) {
      related.push(`${employee.firstName} ${employee.lastName}`);
    }
  });
  return related;
}

module.exports = { isManager, getRelatedEmployees };
