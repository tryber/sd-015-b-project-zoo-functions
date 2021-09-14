const { emps } = require('../data/zoo_data');

function getEmployeeByName(empName) {
  if (!empName) { return {}; }
  return emps.find((_emp) => empName.includes(_emp.firstName) || empName.includes(_emp.lastName));
}

module.exports = getEmployeeByName;
