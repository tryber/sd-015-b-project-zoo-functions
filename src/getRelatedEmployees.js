const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const resolve = isManager(managerId);
  if (resolve === true) {
    const getEmployees = data.employees.filter((employee) => employee.managers.includes(managerId));
    return getEmployees.map((employeeName) => `${employeeName.firstName} ${employeeName.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  
}

module.exports = { isManager, getRelatedEmployees };
