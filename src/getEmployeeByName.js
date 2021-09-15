const data = require('../data/zoo_data');

const { employees } = data;

const verifyEmployers = (name) => employees.find((employer) => ((employer.firstName === name
    || employer.lastName === name) ? employer : undefined));

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }

  const objectEmployer = verifyEmployers(employeeName);

  return objectEmployer;
}

console.log(getEmployeeByName('Nelson'));
module.exports = getEmployeeByName;
