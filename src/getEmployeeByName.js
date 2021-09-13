const data = require('../data/zoo_data');

// se o parametro for algum valor
function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees.find((employee) => employeeName.includes(employee.lastName)
  || employeeName.includes(employee.firstName));
}
module.exports = getEmployeeByName;
