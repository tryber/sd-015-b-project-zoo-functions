const data = require('../data/zoo_data');

const funcionarios = data.employees;

const gerente = funcionarios.map((element) => element.managers);

function isManager(id) {
  const verificador = gerente.filter((element) => element.includes(id));
  const trueOrFalse = verificador.some((element) => element.includes(id));
  return trueOrFalse;
}

function getRelatedEmployees(id) {
  const nomes = [];
  const colaborador = isManager(id);
  if (colaborador === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  funcionarios.forEach((element) => {
    if (element.managers.includes(id)) {
      nomes.push(`${element.firstName} ${element.lastName}`);
    }
  });
  return nomes;
}

getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83');
module.exports = { isManager, getRelatedEmployees };
