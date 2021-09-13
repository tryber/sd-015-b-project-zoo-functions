const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const { employees: people } = data;
  const takeEmployees = people.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return takeEmployees;
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
