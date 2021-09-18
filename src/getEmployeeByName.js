const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((identifierEmployee) =>
    employeeName === identifierEmployee.firstName || employeeName === identifierEmployee.lastName);
}

module.exports = getEmployeeByName;
