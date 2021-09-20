const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const test = employees.find((people = {}) =>
    (people.firstName === employeeName || people.lastName === employeeName));
  return test === undefined ? {} : test;
}
module.exports = getEmployeeByName;
