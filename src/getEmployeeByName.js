const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const employeeByName = employees.filter((employee) => (employeeName.includes(employee.firstName)
  || employeeName.includes(employee.lastName)));
  return employeeByName.reduce(() => employeeByName);
}

console.log(getEmployeeByName('Wishart'));

module.exports = getEmployeeByName;
