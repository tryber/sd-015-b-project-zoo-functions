const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return !employeeName ? {} : employees
    .find(({ firstName, lastName }) => employeeName === firstName || employeeName === lastName);
}

module.exports = getEmployeeByName;
