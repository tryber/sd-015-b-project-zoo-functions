const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

// verifica se é gerente
function isManager(id) {
  if (employees.find((gerente) => gerente.managers.find((manag) => manag === id))) {
    return true;
  }
  return false;
}
console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
// devolve as pessoas de que o gerente é responsável
function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const Responsibles = employees.filter((empl) => empl.managers.find((man) => man === managerId));
    const responsiblesNames = Responsibles.map((emplo) => `${emplo.firstName} ${emplo.lastName}`);
    return responsiblesNames;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
// getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992');

module.exports = { isManager, getRelatedEmployees };
