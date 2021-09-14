/* eslint-disable array-callback-return */
const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }

  const resultado = employees.find((elemento) =>
    elemento.firstName === employeeName || elemento.lastName === employeeName);
  return resultado;
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
