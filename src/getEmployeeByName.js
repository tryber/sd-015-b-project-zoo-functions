const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const employee = data.employees.find((name) =>
    name.firstName === employeeName || name.lastName === employeeName);
  return !employee ? {} : employee;
}

console.log(getEmployeeByName('Emery'));

module.exports = getEmployeeByName;
