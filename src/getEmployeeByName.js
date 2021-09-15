const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName) {
    const employee = employees.find((employeee) => {
      const firstCondition = employeee.firstName === employeeName;
      const secondCondition = employeee.lastName === employeeName;
      return firstCondition || secondCondition;
    });
    return employee;
  }
  return {};
}
module.exports = getEmployeeByName;
