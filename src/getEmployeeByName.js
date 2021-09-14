const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const verify = (a, c) => {
    if (c.firstName === employeeName || c.lastName === employeeName) return c;
    if (a.firstName === employeeName || a.lastName === employeeName) return a;
    return {};
  };
  return employees.reduce(verify);
}

console.log(getEmployeeByName('Wishart'));
module.exports = getEmployeeByName;
