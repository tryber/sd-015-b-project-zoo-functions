// const { employees } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeNa) {
  // seu código aqui
  if (employeeNa === undefined) {
    return {};
  }
  return data.employees
    .find((employees) => employees.firstName === employeeNa || employees.lastName === employeeNa);
}

module.exports = getEmployeeByName;
