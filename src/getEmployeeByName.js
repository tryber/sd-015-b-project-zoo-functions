const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  const employeFiltered = employees
    .find((employe) => employe.firstName === employeeName
    || employe.lastName === employeeName);
  return employeeName ? employeFiltered : {};
}

module.exports = getEmployeeByName;
