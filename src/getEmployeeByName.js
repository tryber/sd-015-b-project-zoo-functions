const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return data.employees.find((name) => name.firstName.includes(employeeName)
    || name.lastName.includes(employeeName));
}

module.exports = getEmployeeByName;
