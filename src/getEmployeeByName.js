const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  return employees.reduce((acc, employee) => {
    if (employee.firstName === employeeName || employee.lastName === employeeName) return employee;
    return acc;
  }, {});
}

module.exports = getEmployeeByName;
