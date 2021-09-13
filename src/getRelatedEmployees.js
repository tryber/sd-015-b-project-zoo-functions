const data = require('../data/zoo_data');

function isManager(id) {
  const arrayManager = data.employees.filter((element) => element.managers.includes(id));
  return arrayManager.length !== 0;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees.map((element) => {
      const { managers, firstName, lastName } = element;
      return managers.includes(managerId) ? `${firstName} ${lastName}` : false;
    }).filter((element) => element !== false);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
