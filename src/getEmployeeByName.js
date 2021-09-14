const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((name) => name.firstName === employeeName
  || name.lastName === employeeName);
}

console.log(getEmployeeByName('Bethea'));
module.exports = getEmployeeByName;
