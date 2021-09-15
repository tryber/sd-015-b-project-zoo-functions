const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((managersId) =>
    managersId.managers.find((espeficManager) => espeficManager === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const findManager = data.employees.filter((employees) =>
    employees.managers.find((espeficManager) => espeficManager === managerId));
  return findManager.map((employeesNames) =>
    `${employeesNames.firstName} ${employeesNames.lastName}`);
}

module.exports = {
  isManager,
  getRelatedEmployees,
};
