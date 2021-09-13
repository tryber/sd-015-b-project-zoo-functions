const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return data.employees.find((element) => {
    return element.firstName === employeeName || element.lastName === employeeName
  }) || {};
}

console.log(getEmployeeByName())

module.exports = getEmployeeByName;
