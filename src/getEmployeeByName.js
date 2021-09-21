const data = require('../data/zoo_data');
const {employees} = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
    // Se for não for passado nenhum parâmetro para a função é retornado um obj vazio.
  }
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  // Procura dentro de 'employees' se o 'firstName' ou 'lastName' correspondem ao parâmetro passado. Se correspondem é retornado o obj do funcionário.
}

module.exports = getEmployeeByName;
