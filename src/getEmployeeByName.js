const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  const nome = employeeName;
  return data.employees.find((nomes) => nomes.firstName === nome || nomes.lastName === nome);
}

module.exports = getEmployeeByName;
