const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if(employeeName === undefined) {
    return {};
  }
  return employees.find(({firstName, lastName} = employees) =>(firstName === employeeName || lastName === employeeName));
}

console.log(getEmployeeByName());

module.exports = getEmployeeByName;
