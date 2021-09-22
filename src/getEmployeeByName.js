const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  return employees.find((employee) => employee.firstName === employeeName || employee.lastName === employeeName) || {};
}
console.log(getEmployeeByName('Wilburn'));

module.exports = getEmployeeByName;
