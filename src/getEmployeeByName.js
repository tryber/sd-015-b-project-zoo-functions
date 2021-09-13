const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let result = {};
  const { employees } = data;
  employees.forEach((element) => {
    if (employeeName === element.firstName || employeeName === element.lastName) {
      result = element;
    }
  });
  return result;
}

module.exports = getEmployeeByName;
