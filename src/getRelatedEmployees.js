const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((elemento) => elemento.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const eGerente = isManager(managerId);
  if (eGerente) {
    return data.employees.filter((elemento) => elemento.managers.includes(managerId))
      .map((elemento) => `${elemento.firstName} ${elemento.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
