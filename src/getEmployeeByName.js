const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }

  const employeeFirstName = employees.find((employee) => employee.firstName === employeeName);
  const employeeLastName = employees.find((employee) => employee.lastName === employeeName);

  if (employeeFirstName !== undefined) {
    return employeeFirstName;
  }

  if (employeeLastName !== undefined) {
    return employeeLastName;
  }
}

module.exports = getEmployeeByName;
