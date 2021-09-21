const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  for (let index = 0; index < data.employees.length; index += 1) {
    const employer = data.employees[index];
    if (employer.firstName === employeeName || employer.lastName === employeeName) {
      return data.employees[index];
    }
  }
  if (employeeName === undefined) {
    return {};
  }
}

module.exports = getEmployeeByName;
