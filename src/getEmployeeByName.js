const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return employees.find((names) => names.firstName === employeeName
  || names.lastName === employeeName);
}
console.log(getEmployeeByName());

module.exports = getEmployeeByName;
