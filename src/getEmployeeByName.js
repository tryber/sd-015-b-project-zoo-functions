const data = require('../data/zoo_data');

function getEmployeeByName(name) {
  if (!name) return {};
  const empData = data.employees.find((emp) => emp.firstName === name || emp.lastName === name);
  return empData;
}

module.exports = getEmployeeByName;
