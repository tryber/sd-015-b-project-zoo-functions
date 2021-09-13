const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return employees.find((em) => em.firstName === employeeName || em.lastName === employeeName, {});
}

module.exports = getEmployeeByName;
