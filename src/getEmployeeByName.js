const { employees } = require('../data/zoo_data');

function getEmployeeByName(name) {
  let result = {};
  employees.forEach((employee) => {
    if (employee.firstName === name || employee.lastName === name) result = employee;
  });
  return result;
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
