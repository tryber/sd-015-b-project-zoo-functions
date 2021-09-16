const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const reduceEmployee = (acc, cur) =>
    ((cur.lastName === employeeName || cur.firstName === employeeName) ? cur : acc);
  return employees.reduce(reduceEmployee, {});
}

module.exports = getEmployeeByName;
