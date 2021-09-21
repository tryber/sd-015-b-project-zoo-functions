const data = require('../data/zoo_data');

function isManager(id) {
  // verifica se é gerente ou não
  return data.employees.some((peopleInfo) => peopleInfo.managers
    .some((checkId) => checkId === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees.filter((element) => element.managers
      .some((id) => id === managerId))
      .map((fullname) => `${fullname.firstName} ${fullname.lastName}`);
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(`Employees = ${getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992')}`);
// [ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ]
module.exports = { isManager, getRelatedEmployees };
