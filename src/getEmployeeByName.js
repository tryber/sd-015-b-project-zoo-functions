const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  return employees.find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName ) || {};
}

console.log(getEmployeeByName('Emery'));
module.exports = getEmployeeByName;
