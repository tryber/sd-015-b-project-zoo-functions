const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((person) => person.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const collaborators = data.employees.filter((person) => person.managers.includes(managerId));
    return collaborators.map((fullName) => `${fullName.firstName} ${fullName.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
module.exports = { isManager, getRelatedEmployees };
