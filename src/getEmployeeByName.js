const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const employee = data.employees.find(({ firstName, lastName }) => {
    const isEmployeeFound = firstName === employeeName || lastName === employeeName;

    return isEmployeeFound;
  });

  return employeeName === undefined ? { } : employee;
}

module.exports = getEmployeeByName;
