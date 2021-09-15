const data = require('../data/zoo_data');
const { employees: emp } = require('../data/zoo_data');

function getEmployeeByName(empName) {
  if (!empName) {
    return {};
  }
  return emp.find((employee) => employee.firstName === empName || employee.lastName === empName);
}

module.exports = getEmployeeByName;
