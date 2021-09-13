/* eslint-disable max-len */
const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const employee = employees.find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
  if (employee) {
    return employee;
  }
  return {};
}

module.exports = getEmployeeByName;
