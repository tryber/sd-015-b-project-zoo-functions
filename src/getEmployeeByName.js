const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const verify = (a, c, i) => {
    if (c.firstName === employeeName || c.lastName === employeeName) return c;
    if (a.firstName === employeeName || a.lastName === employeeName) return a;
    // console.log('-------------------ACCUMULATOR é:', a)
    // console.log('-------------------INDEX é:', i)
    // console.log('-------------------CURRENT é:', c)
    return {};
  };
  return employees.reduce(verify);
}

console.log(getEmployeeByName('Wishart'));
module.exports = getEmployeeByName;
