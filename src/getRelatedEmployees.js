const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const listaDeFuncionario = data.employees.filter((nome) => nome.managers.length >= 1);
  const gerente = listaDeFuncionario.map((nome) => nome.managers);
  const arrIdDeGerente = gerente.toString().split(',');
  return arrIdDeGerente.includes(id);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const funcionarios = data.employees.filter((nome) => nome.managers.includes(managerId));
  const arrNomes = funcionarios.map((nome) => `${nome.firstName} ${nome.lastName}`);
  return arrNomes;
}

module.exports = { isManager, getRelatedEmployees };
