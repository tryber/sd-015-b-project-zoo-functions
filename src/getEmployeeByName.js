const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const employee = employees.find((empregado) => empregado.firstName === employeeName
    || empregado.lastName === employeeName);
  return employee;
}
console.log(getEmployeeByName('Nelson'));
module.exports = getEmployeeByName;
