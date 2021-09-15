const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const allManagers = employees.filter(({ managers }) => managers.includes(managerId));

    return allManagers.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
