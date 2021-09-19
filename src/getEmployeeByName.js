const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(
    (pessoa) => pessoa.firstName === employeeName || pessoa.lastName === employeeName,
  );
}

module.exports = getEmployeeByName;
