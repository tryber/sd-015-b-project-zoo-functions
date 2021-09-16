const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return employees.filter((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName))[0] || {};
}

module.exports = getEmployeeByName;
