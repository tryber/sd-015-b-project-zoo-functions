const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const filterManager = data.employees.filter((id) => id.managers.includes(managerId));
  const listManager = filterManager.map((employee) => `${employee.firstName} ${employee.lastName}`);

  return listManager;
}

module.exports = { isManager, getRelatedEmployees };
