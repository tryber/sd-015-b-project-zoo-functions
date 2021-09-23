const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((informaçãoDaPessoa) => informaçãoDaPessoa.managers
    .some((verificadorId) => verificadorId === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees.filter((element) => element.managers
      .some((id) => id === managerId))
      .map((fullname) => `${fullname.firstName} ${fullname.lastName}`);
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
