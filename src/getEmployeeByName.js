const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName) {
    const employeeByName = employees.find((employeeList) =>
      employeeList.firstName === employeeName || employeeList.lastName === employeeName);
    return employeeByName;
  }
  return {};
}

module.exports = getEmployeeByName;
