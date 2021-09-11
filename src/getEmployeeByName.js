const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return employees
    .find((employee) =>
      employee.firstName === employeeName || employee.lastName === employeeName) || {};
}

module.exports = getEmployeeByName;
