const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees
    .find((person) => person.firstName === employeeName || person.lastName === employeeName);
}

module.exports = getEmployeeByName;
