const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) => (
    employee.managers.some((manager) => manager === id)
  ));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const employees = data.employees.filter((employee) => (
      employee.managers.some((manager) => manager === managerId)
    ));
    return employees.map((element) => `${element.firstName} ${element.lastName}`);
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
