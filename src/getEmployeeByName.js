const data = require('../data/zoo_data');

const { employees } = data;

const getEmployeeByName = (employeeName = '') => {
  if (employeeName === '') return {};

  return employees.find(
    (employee) => employee.firstName === employeeName || employee.lastName === employeeName,
  );
};

module.exports = getEmployeeByName;
