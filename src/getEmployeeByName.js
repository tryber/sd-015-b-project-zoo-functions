const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  return employees.filter((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName))[0] || {};
}

module.exports = getEmployeeByName;
