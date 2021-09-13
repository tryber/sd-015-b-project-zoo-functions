const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const array = employees.filter((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
  return array[0];
}

module.exports = getEmployeeByName;
