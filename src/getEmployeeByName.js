const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const checkCondition = employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
  return checkCondition;
}

module.exports = getEmployeeByName;
