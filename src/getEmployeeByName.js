const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) { return {}; }
  const employee = data.employees;
  const findEMployee = employee.find((individual) => individual
    .firstName === employeeName || individual
    .lastName === employeeName);
  return findEMployee;
}

module.exports = getEmployeeByName;
