const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};

  const employee = data.employees.find((name) => (name
    .firstName === employeeName || name.lastName === employeeName));
  return employee;
}

module.exports = getEmployeeByName;
