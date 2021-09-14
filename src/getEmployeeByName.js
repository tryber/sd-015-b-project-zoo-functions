const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) { return {}; }
  const employee = employees.find((_employee) => employeeName.includes(_employee.firstName) || employeeName.includes(_employee.lastName));
  return employee;
}

module.exports = getEmployeeByName;
