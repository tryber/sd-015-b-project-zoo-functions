const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } const managerObjects = employees.filter((element) => element.managers.includes(managerId));
  return managerObjects.map((element) => `${element.firstName} ${element.lastName}`);
}
module.exports = { isManager, getRelatedEmployees };
