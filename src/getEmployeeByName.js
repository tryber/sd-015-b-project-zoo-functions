const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) { return {}; }
  const employees = data.employees;
  const findEMployee = employees.find((individual) => individual
    .firstName === employeeName || individual
    .lastName === employeeName);
  return findEMployee;
}

module.exports = getEmployeeByName;
