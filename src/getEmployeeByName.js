const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  return employees;
}

console.log(getEmployeeByName('Emery'));
module.exports = getEmployeeByName;
