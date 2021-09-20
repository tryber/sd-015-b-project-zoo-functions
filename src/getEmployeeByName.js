const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) { return {}; }
  const findEMployee = employees.find((individual) => individual
    .firstName === employeeName || individual
    .lastName === employeeName);
  return findEMployee;
}

module.exports = getEmployeeByName;
