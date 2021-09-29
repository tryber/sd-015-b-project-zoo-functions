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

module.exports = getEmployeeByName;
