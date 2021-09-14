const data = require('../data/zoo_data');

function isManager(id) {
  const manager = data.employees.filter((gerente) => gerente.managers.includes(id));
  return manager.length !== 0;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees.map((Element) => {
      const { managers, firstName, lastName } = Element;
      return managers.includes(managerId) ? `${firstName} ${lastName}` : false;
    }).filter((Element) => Element !== false);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
