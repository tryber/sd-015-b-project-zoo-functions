const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((manager) => manager.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const findManager = employees.some((manager) => manager.managers.includes(managerId.toString()));
  if (findManager === true) {
    const filterManaged = employees.filter((managed) =>
      managed.managers.includes(managerId.toString()));
    return filterManaged.reduce((acumulator, current) => acumulator
      .concat(`${current.firstName} ${current.lastName}`), []);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
