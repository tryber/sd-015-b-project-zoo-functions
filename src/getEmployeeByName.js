const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const checkName = employees.find(({ firstName, lastName }) =>
    employeeName === firstName || employeeName === lastName);

  return !employeeName ? {} : checkName;
}

module.exports = getEmployeeByName;
