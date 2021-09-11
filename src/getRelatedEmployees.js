const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers
    .some((serchId) => serchId === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees.filter((element) => element
      .managers.some((id) => id === managerId))
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
