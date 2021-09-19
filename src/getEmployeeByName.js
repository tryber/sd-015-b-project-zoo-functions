const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui

  if (!employeeName) return {};

  let employee = data.employees.find(
    (verifyEmployeeName) => employeeName === verifyEmployeeName.firstName,  
    );

  if (!employee) {
    employee = data.employees.find(
      (verifyEmployeeName) => employeeName === verifyEmployeeName.lastName,  
      );
  }

  return employee;
}

module.exports = getEmployeeByName;
