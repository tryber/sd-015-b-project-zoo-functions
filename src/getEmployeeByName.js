const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};

  const takeEmployees = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);

  return takeEmployees;
}

module.exports = getEmployeeByName;
