const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return data.employees.filter(
    ({ firstName }, { lastName }) => (employeeName.includes(firstName) || employeeName.includes(lastName)),
  );
}

module.exports = getEmployeeByName;

console.log(getEmployeeByName('Nelson'));
