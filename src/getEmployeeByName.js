const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return data.employees.filter((namePeople) => (namePeople.firstName === employeeName
    || namePeople.lastName === employeeName)).shift() || {};
}

module.exports = getEmployeeByName;
