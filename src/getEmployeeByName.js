// const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const returnEmployee = (employee) => {
  if (employee) {
    return employee;
  }
  return {};
};

function getEmployeeByName(employeeName) {
  // seu código aqui
  const employeeObject = data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return returnEmployee(employeeObject);
}

module.exports = getEmployeeByName;
