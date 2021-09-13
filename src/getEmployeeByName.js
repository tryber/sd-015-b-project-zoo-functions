const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const returnObject = {};
  const selectedEmployee = data.employees.find((employee) => employee.firstName === employeeName
    || employee.lastName === employeeName);
  return Object.assign(returnObject, selectedEmployee);
}

module.exports = getEmployeeByName;
