const data = require('../data/zoo_data');

function isManager(id) {
  const getEemployees = data.employees;
  const getManagers = getEemployees.map((gerente) => gerente.managers);
  return getManagers.some((argument) => argument.some((ab) => ab.includes(id)));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees.filter((employee) => employee.managers
      .includes(managerId))
      .map((fullName) => `${fullName.firstName} ${fullName.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
