const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  const arrayOfManagers = employees
    .map((element) => element.managers)
    .reduce((acc, curVal) => acc.concat(curVal));

  return !!arrayOfManagers.includes(id);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const arrayOfResponsibleFor = employees
      .filter((obj) => obj.managers.includes(managerId))
      .map((element) => `${element.firstName} ${element.lastName}`);

    return arrayOfResponsibleFor;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
