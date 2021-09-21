const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeeByName = (nEmployee) => {
  if (!nEmployee) return {};
  const employee = employees.find((i) => i.firstName === nEmployee || i.lastName === nEmployee);
  return employee;
};

module.exports = getEmployeeByName;
