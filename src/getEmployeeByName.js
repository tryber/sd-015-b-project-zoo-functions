const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName) {
    return data.employees.find((employees) =>
      employees.firstName === employeeName || employees.lastName === employeeName);
  } return {};
}

module.exports = getEmployeeByName;
