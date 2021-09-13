const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  return data.employees.filter((emp) => ((emp.firstName === employeeName)
    || (emp.lastName === employeeName)))[0] === undefined ? {}
    : data.employees.filter((emp) => ((emp.firstName === employeeName)
    || (emp.lastName === employeeName)))[0];
}

module.exports = getEmployeeByName;
