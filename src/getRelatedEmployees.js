const data = require('../data/zoo_data');

function getRelatedEmployees(managerId) {
  const findManager = data.employees.filter((employees) =>
    employees.managers.find((espeficManager) => espeficManager === managerId));
  return findManager.map((employeesNames) =>
    `${employeesNames.firstName} ${employeesNames.lastName}`);
}

function isManager(id) {
  getRelatedEmployees(id);
  return data.employees.some((managersId) =>
    managersId.managers.find((espeficManager) => espeficManager === id));
}

if (isManager() === false) throw new Error('parameter y must not be 0');

console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
