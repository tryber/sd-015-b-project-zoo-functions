const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return employees
    .find((employee) =>
      employeeName === employee.firstName || employeeName === employee.lastName) || {};
}

module.exports = getEmployeeByName;
