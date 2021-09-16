const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName) {
    return employees.find((funcionarios) => funcionarios.firstName === employeeName
     || funcionarios.lastName === employeeName);
  } return {};
}

console.log(getEmployeeByName('Emery'));

module.exports = getEmployeeByName;
