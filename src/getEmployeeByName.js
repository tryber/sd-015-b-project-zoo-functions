const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName) {
    const pesquisa = employees.find((param) =>
      param.lastName === employeeName || param.firstName === employeeName);
    return pesquisa;
  }
  return {};
}

module.exports = getEmployeeByName;
