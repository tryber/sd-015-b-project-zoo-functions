const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const comparaEmployee = (employee) => (employeeName === employee.firstName)
  || (employeeName === employee.lastName);
  const employeeFound = data.employees.find(comparaEmployee);

  return employeeFound === undefined ? {} : employeeFound;
}
console.log(getEmployeeByName());

module.exports = getEmployeeByName;
