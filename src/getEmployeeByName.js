const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const findEmployee = (employee) => employee.firstName === employeeName
   || employee.lastName === employeeName;
  const foundEmployee = employees.find(findEmployee);
  return foundEmployee;
}

module.exports = getEmployeeByName;
