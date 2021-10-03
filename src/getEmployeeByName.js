const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return (
    employees.find(({ firstName, lastName }) => (
      [firstName, lastName].includes(employeeName)
    ))
  );
}

module.exports = getEmployeeByName;
