const data = require('../data/zoo_data');

const splitName = (receivedName) => receivedName.split(' ');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const splitedName = splitName(employeeName);
  return data.employees.find((employee) => splitedName.includes(employee.firstName)
  || splitedName.includes(employee.lastName));
}
console.log(getEmployeeByName());
console.log(getEmployeeByName('Strauss'));

module.exports = getEmployeeByName;
