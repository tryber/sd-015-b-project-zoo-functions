const data = require('../data/zoo_data');

function getEmployeeByName(scrName) {
  const employee = data.employees.find((e) => e.firstName === scrName || e.lastName === scrName);
  return employee || {};
}

module.exports = getEmployeeByName;
