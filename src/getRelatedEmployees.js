const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

// verifica se é gerente
function isManager(id) {
  if (employees.find((gerente) => gerente.managers.find((manag) => manag === id))) {
    return true;
  }
  return false;
}

// devolve as pessoas de que o gerente é responsável
function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const Responsibles = employees.filter((empl) => empl.managers.find((man) => man === managerId));
    const responsiblesNames = Responsibles.map((emplo) => `${emplo.firstName} ${emplo.lastName}`);
    return responsiblesNames;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
