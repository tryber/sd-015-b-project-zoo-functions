const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const searchManager = employees.some((employee) => employee.managers.includes(id));
  return searchManager;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const getManager = employees.filter((element) => element.managers.includes(managerId));
    return getManager.map((elements) => `${elements.firstName} ${elements.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
