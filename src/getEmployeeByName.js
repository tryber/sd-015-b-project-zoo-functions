const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find((employee) => {
    if (employee.firstName === employeeName || employee.lastName === employeeName) {
      return true;
    } return false;
  });
}

console.log(getEmployeeByName());
console.log(getEmployeeByName('Emery'));
console.log(getEmployeeByName('Wishart'));

module.exports = getEmployeeByName;
