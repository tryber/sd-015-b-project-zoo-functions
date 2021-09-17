const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  let valor = {};
  valor = employees.find((elemento) => (elemento.firstName === employeeName
  || elemento.lastName === employeeName));
  if (!valor) {
    valor = {};
  }
  return valor;
}

module.exports = getEmployeeByName;
