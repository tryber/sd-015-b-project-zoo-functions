const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const empregados = (empregado) =>
    empregado.firstName === employeeName || empregado.lastName === employeeName;
  return employees.find(empregados);
}

module.exports = getEmployeeByName;
