const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const { employees } = data;
  const getEmployee = (obj) => obj.firstName === employeeName || obj.lastName === employeeName;

  return employeeName !== undefined ? employees.find(getEmployee) : {};
}

module.exports = getEmployeeByName;
