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
}

module.exports = { isManager, getRelatedEmployees };
