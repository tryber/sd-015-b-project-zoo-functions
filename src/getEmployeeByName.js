const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const employeeData = data.employees.filter((employee) => {
    if (employee.firstName === employeeName || employee.lastName === employeeName) {
      return true;
    }
    return false;
  });

  return employeeName === undefined ? {} : employeeData[0];
}

module.exports = getEmployeeByName;
