const data = require('../data/zoo_data');

const trabalhadores = data.employees;

function getEmployeeByName(employeeName) {
  const colaboradorNome = trabalhadores.find((element) => element.firstName === employeeName);
  const colaboradorSobrenome = trabalhadores.find((element) => element.lastName === employeeName);
  if (colaboradorNome !== undefined) {
    return colaboradorNome;
  } if (colaboradorSobrenome !== undefined) {
    return colaboradorSobrenome;
  } return {};
}

module.exports = getEmployeeByName;
