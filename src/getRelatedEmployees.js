const data = require('../data/zoo_data');

function isManager(id) {
  const managerList = data.employees.reduce((acc, actual) => acc.concat(actual.managers), []);
  return (!![...new Set(managerList)].find((manager) => manager === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees.filter((funcionario) =>
    funcionario.managers.indexOf(managerId) >= 0).reduce((acc, actual) => {
    acc.push(`${actual.firstName} ${actual.lastName}`);
    return acc;
  }, []);
}

module.exports = { isManager, getRelatedEmployees };
