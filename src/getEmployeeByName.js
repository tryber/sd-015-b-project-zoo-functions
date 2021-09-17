const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const test = employees.filter((employee) => employee.lastName === employeeName
    || employee.firstName === employeeName);

  return test[0];
}

module.exports = getEmployeeByName;
