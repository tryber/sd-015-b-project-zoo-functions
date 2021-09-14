const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return data.employees.find(
    (propriedade) =>
      propriedade.firstName === employeeName
      || propriedade.lastName === employeeName,
  );
}

module.exports = getEmployeeByName;
