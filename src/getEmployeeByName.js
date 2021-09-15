const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeeByName = (nameEmployee) => {
  if (!nameEmployee) return {};
    const employee = employees.find(finderEmployee => finderEmployee.firstName === nameEmployee || finderEmployee.lastName === nameEmployee);
    return employee;
  };

module.exports = getEmployeeByName;
