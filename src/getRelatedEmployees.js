const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  const searchManager = employees.some((employee) => employee.managers.includes(id));
  return searchManager;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === true) {
    const callbackManager = employees.filter((element) => element.managers.includes(managerId));
    return callbackManager.map((elements) => `${elements.firstName} ${elements.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83');
module.exports = { isManager, getRelatedEmployees };
