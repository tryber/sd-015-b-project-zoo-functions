const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const pessoas = employees.filter(() => employeeName.includes());

  return pessoas;
}

module.exports = getEmployeeByName;
