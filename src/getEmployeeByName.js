const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const SearchName = employees.find((employeesValue) =>
    employeesValue.firstName === employeeName || employeesValue.lastName === employeeName);
  return SearchName;
}
module.exports = getEmployeeByName;
