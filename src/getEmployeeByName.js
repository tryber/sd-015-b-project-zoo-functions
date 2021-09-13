const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return !employeeName ? {} : employees
    .find((persons) => persons.firstName === employeeName || persons.lastName === employeeName);
}

module.exports = getEmployeeByName;
