const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // sem parametro, retorna objeto vazio
  if (!employeeName) {
    return {};
  }
  // com parâmetro, retorna o funcionário
  return data.employees.find((employee) =>
    employee.firstName === employeeName
    || employee.lastName === employeeName);
}

// console.log(getEmployeeByName())
// console.log(getEmployeeByName('flavia'))
// console.log(getEmployeeByName('Elser'))

module.exports = getEmployeeByName;
