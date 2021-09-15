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

console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = { isManager, getRelatedEmployees };
