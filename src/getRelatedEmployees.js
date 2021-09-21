const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  const findManager = employees.some((element) => element.managers.includes(id));
  return findManager;
}

function getRelatedEmployees(managerId) {
  const checkIsManager = isManager(managerId);
  if (!checkIsManager) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const filterName = employees.filter((element) => element.managers.includes(managerId));
  const totalNames = [];
  filterName.map((element) => totalNames.push(`${element.firstName} ${element.lastName}`));
  return totalNames;
}

module.exports = { isManager, getRelatedEmployees };
