const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return employees.find(
    (propriedade) =>
      propriedade.firstName === employeeName
      || propriedade.lastName === employeeName,
  );
}

module.exports = getEmployeeByName;
