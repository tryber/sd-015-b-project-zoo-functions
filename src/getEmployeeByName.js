const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const verify = (a, c) => {
    const { firstName, lastName } = c;
    if (firstName === employeeName || lastName === employeeName) return c;
    return a;
  };
  return employees.reduce((verify), {});
}

console.log(getEmployeeByName('Wishart'));
module.exports = getEmployeeByName;
