const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeeByName = (nEmployee) => {
  if (!nEmployee) return {};
  const employee = employees.find((i) => i.firstName === nameEmployee || i.lastName === nameEmployee);
  return employee;
};

module.exports = getEmployeeByName;
