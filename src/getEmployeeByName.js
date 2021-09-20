const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  const employeeFound = employees.find((employee) =>
    (employee.firstName === employeeName || employee.lastName === employeeName));

  return employeeFound;
}

module.exports = getEmployeeByName;
