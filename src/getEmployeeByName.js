const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const employee = data.employees.find((element) => (
    element.firstName === employeeName || element.lastName === employeeName
  ));
  return employee;
}

module.exports = getEmployeeByName;
