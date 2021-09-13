const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const getManagers = data.employees.some((elemento) => elemento.managers.includes(id));
  return getManagers;
}
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const filterManager = data.employees.filter((element) => element.managers.includes(managerId));
    const managerObject = filterManager.map((item) => `${item.firstName} ${item.lastName}`);
    return managerObject;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
