const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((name) =>
    employeeName === name.firstName || employeeName === name.lastName);
}

module.exports = getEmployeeByName;
