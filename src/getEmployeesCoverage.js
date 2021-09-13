const data = require('../data/zoo_data');

function getEmployeesCoverage(object) {
  const employeeFirstName = data.employees.find((employee) => (object.name === employee.firstName));
  const employeeLastName = data.employees.find((employee) => (object.name === employee.lastName));
  const employeeId = data.employees.find((employee) => (object.name === employee.id));
  if (employeeFirstName !== undefined) return employeeFirstName;
  if (employeeLastName !== undefined) return employeeLastName;
  if (employeeId !== undefined) return employeeId;
}

console.log(getEmployeesCoverage({ name: 'Nelson' }));

module.exports = getEmployeesCoverage;
