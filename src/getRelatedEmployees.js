const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const employeesManager = employees.some((manager) => manager.managers.includes(id));
  return employeesManager;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const manager = employees.filter((employe) => employe.managers.includes(managerId));
  return manager.map((employes) => `${employes.firstName} ${employes.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };

isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad');
