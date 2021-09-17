const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const employeeFirstName = data.employees.find((element) => element.firstName === employeeName);
  const employeeLastName = data.employees.find((element) => element.lastName === employeeName);
  if (employeeFirstName === undefined) {
    return employeeLastName;
  }
  return employeeFirstName;
}

module.exports = getEmployeeByName;
