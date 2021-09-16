const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const managed = employees.filter((employee) => employee.managers.includes(managerId));
    const managedNames = managed.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
    return managedNames;
  }
}

module.exports = { isManager, getRelatedEmployees };
