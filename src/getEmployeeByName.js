const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  // seu código aqui
  return !employeeName ? {} : employees
    .find((object) => employeeName === object.firstName || employeeName === object.lastName);
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
