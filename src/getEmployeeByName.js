const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }

  return employees.find(({ firstName, lastName }) => {
    const employee = firstName === employeeName || lastName === employeeName;
    return employee;
  });
}

// getEmployeeByName()

module.exports = getEmployeeByName;
