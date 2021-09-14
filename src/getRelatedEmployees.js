const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((empregado) => empregado.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const gerente = isManager(managerId);
  if (gerente === true) {
    const colaboradores = data.employees.filter((empregado) =>
      empregado.managers.includes(managerId));
    const resposta = colaboradores.map((nomeCompletoColab) =>
      `${nomeCompletoColab.firstName} ${nomeCompletoColab.lastName}`);
    return resposta;
  }
  if (gerente === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

module.exports = { isManager, getRelatedEmployees };
