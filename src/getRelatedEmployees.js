const data = require('../data/zoo_data');

const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const employeeList = employees.filter((employee) => employee.managers.includes(managerId));

    return employeeList.map((name) => `${name.firstName} ${name.lastName}`);
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
// Requisito entendido e feito seguindo consulta ao commit de Denis Jonathan

module.exports = { isManager, getRelatedEmployees };
