const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const employeeObj = employees
    .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
  if (employeeObj) {
    return employeeObj;
  }
  return {};
}

module.exports = getEmployeeByName;
