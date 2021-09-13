const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const find = employees.find(({ firstName, lastName }) =>
    employeeName === firstName || employeeName === lastName);

  return !employeeName ? {} : find;
}

module.exports = getEmployeeByName;
