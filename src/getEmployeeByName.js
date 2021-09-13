const data = require('../data/zoo_data');

const { employees } = data;
function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  const getNames = employees
    .find((name) => name.firstName === employeeName || name.lastName === employeeName);

  return getNames;
}

module.exports = getEmployeeByName;
