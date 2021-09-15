const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return employees.find(
    (pessoas) => pessoas.firstName === employeeName || pessoas.lastName === employeeName,
  );
}

module.exports = getEmployeeByName;
