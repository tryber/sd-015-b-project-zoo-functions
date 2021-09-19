const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const getByName = data.employees;
  if (!employeeName) {
    return {};
  }
  return getByName.filter(
    (employee) =>
      employee.firstName === employeeName || employee.lastName === employeeName,
  ).shift();
}

module.exports = getEmployeeByName;

console.log(getEmployeeByName('Nigel'));
