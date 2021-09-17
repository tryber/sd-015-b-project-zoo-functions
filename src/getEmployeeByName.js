const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  const obj = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);

  if (obj === undefined) return {};
  return obj;
}

module.exports = getEmployeeByName;
