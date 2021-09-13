const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};

  return employees.find((employee) => employeeName.includes(employee.firstName) || employeeName
    .includes(employee.lastName));
}

module.exports = getEmployeeByName;
