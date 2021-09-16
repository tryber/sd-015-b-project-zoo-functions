const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return employees.some((employe) =>
    employe.managers.some((manager) => manager === id));
}
const searchByManager = (id) => employees
  .filter((funcionario) => funcionario.managers
    .includes(id));

function getRelatedEmployees(managerId) {
  // seu código aqui
  const ifIsManager = isManager(managerId);

  if (!ifIsManager) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const funcionariosGerenciadas = searchByManager(managerId);
    const arrayDeNomes = [];

    funcionariosGerenciadas.forEach((nomeSobrenome) =>
      arrayDeNomes.push(`${nomeSobrenome.firstName} ${nomeSobrenome.lastName}`));

    return arrayDeNomes;
  }
}

module.exports = { isManager, getRelatedEmployees };
