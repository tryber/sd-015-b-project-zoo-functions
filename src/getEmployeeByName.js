const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName) {
    return employees
      .find((element) => element.firstName === employeeName || element.lastName === employeeName);
  } return {};
}
module.exports = getEmployeeByName;
