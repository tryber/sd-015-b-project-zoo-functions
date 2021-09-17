const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(...employeeName) {
  return employees.filter((employee) => employeeName.includes(employee.firstName)
    || employeeName.includes(employee.lastName)).reduce((_, curr) => curr, {});
}

module.exports = getEmployeeByName;
