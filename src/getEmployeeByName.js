const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const findEmployee = (employee) => (employeeName === employee.firstName)
  || (employeeName === employee.lastName);
  const employeeFound = data.employees.find(findEmployee);
  return employeeFound === undefined ? {} : employeeFound;
}

// Utilizei o repositório do Erickson Siqueira pra resolução da última linha - link: https://github.com/tryber/sd-015-b-project-zoo-functions/pull/65/commits/47d718c2d38e9d7e3bed973a0d9b6e82f5ca1b54

module.exports = getEmployeeByName;
