const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName) {
    return employees.find((employee) => employee.firstName === employeeName
    || employee.lastName === employeeName);
  }
  return {};
}

module.exports = getEmployeeByName;
