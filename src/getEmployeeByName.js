const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return typeof employeeName === 'undefined' ? ({})
    : employees.find((employee) => employee.firstName === employeeName
      || employee.lastName === employeeName);
}

module.exports = getEmployeeByName;
