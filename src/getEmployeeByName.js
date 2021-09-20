const data = require('../data/zoo_data');

const { employees } = data;
function getEmployeeByName(employeeName) {
  const employee = employees.find((element) => element.firstName === employeeName
  || element.lastName === employeeName);
  if (!employee) {
    return {};
  }
  return employee;
}

module.exports = getEmployeeByName;
