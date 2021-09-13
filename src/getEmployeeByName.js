const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const employee = employeeName
    ? data.employees.find(({ firstName, lastName }) =>
      [firstName, lastName].includes(employeeName))
    : {};
  return employee;
}

module.exports = getEmployeeByName;
