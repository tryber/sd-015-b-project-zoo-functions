const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  const searchEmployee = employees
    .find(({ firstName, lastName }) => employeeName === firstName || employeeName === lastName);
  return employeeName ? searchEmployee : {};
}

module.exports = getEmployeeByName;
