const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const anyName = data.employees.filter((item) => Object.values(item).includes(employeeName))[0];
  return employeeName ? anyName : {};
}

module.exports = getEmployeeByName;
