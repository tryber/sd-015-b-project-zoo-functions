const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((element) => (element.managers.includes(id)));
}

function getNames(id) {
  const colaborador = employees.filter((element) => element.managers.includes(id));
  return colaborador.map((element) => `${element.firstName} ${element.lastName}`);
}

function getRelatedEmployees(managerId) {
  const manager = isManager(managerId);
  if (manager) {
    const array = getNames(managerId);
    return array;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
