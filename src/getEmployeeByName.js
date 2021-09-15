const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((emp) =>
    emp.firstName === employeeName || emp.lastName === employeeName);
}

module.exports = getEmployeeByName;
