const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (typeof employeeName === 'undefined') {
    return {};
  }
  const searchEmployee = employees.find((element) => 
    element.firstName === employeeName || element.lastName === employeeName);
  return searchEmployee;
}

module.exports = getEmployeeByName;
