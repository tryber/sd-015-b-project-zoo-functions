// const { employees } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeNa) {
  // seu código aqui
  if (employeeNa === undefined) {
    return {};
  }
  return employees
    .find((employeess) => employeess.firstName === employeeNa
     || employeess.lastName === employeeNa);
}

module.exports = getEmployeeByName;
