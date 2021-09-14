const data = require('../data/zoo_data');

const { employees } = require('../data/zoo_data');

function getEmployeeByName(name) {
  if (name === undefined) return {};
  return employees.find((property) => property.firstName === name || property.lastName === name);
}

module.exports = getEmployeeByName;
