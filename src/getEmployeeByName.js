const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return data.employees.find((element) => {
    const { firstName, lastName } = element;
    return firstName === employeeName || lastName === employeeName;
  }) || {};
}

module.exports = getEmployeeByName;
