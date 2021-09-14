const data = require('../data/zoo_data');

const findEmployee = (employees, employeeName) => {
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
};

const getEmployeeByName = (employeeName, func = findEmployee) => {
  let result = {};
  if (employeeName !== undefined) {
    result = func(data.employees, employeeName);
  }
  return result;
}

module.exports = getEmployeeByName;
