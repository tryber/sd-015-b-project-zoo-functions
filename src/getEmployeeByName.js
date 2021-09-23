const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return data.employees.filter((nomeDaPessoa) => (nomeDaPessoa.firstName === employeeName
    || nomeDaPessoa.lastName === employeeName)).shift() || {};
}

module.exports = getEmployeeByName;
