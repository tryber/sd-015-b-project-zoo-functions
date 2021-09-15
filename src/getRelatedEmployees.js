const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees.some((verificaGerente) => verificaGerente.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const responsavelPor = data.employees
      .filter((subordinados) => subordinados.managers.includes(managerId));
    return responsavelPor
      .map((subordinadosLista) => `${subordinadosLista.firstName} ${subordinadosLista.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
