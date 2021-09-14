const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  let checkManager = false;
  employees.forEach(({ managers } = employees) => {
    managers.forEach((managerID) => {
      if (managerID === id) {
        checkManager = true;
      }
    });
  });
  return checkManager;
}
function getsManagers(id) {
  const managesWho = [];
  employees.forEach(({ managers, firstName, lastName } = employees) => {
    managers.forEach((managerID) => {
      if (managerID === id) {
        managesWho.push(`${firstName} ${lastName}`);
      }
    });
  });

  return managesWho;
}
function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    return getsManagers(managerId);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
