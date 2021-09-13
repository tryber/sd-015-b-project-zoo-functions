const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let returnObject = {};
  data.employees.forEach((element) => {
    const { firstName, lastName } = element;
    if (firstName === employeeName || lastName === employeeName) {
      returnObject = element;
    }
  });
  return returnObject;
}

module.exports = getEmployeeByName;
