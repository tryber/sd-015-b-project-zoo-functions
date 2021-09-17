const data = require('../data/zoo_data');

function isManager(id) {
  const managerCollect = data.employees.map((element) => element.managers);
  return managerCollect.some((element) => element.includes(id));
}

function getRelatedEmployees(managerId) {
  // const tráz todos os subordinados do managerId;
  const responsibleFor = data.employees.filter((element) => element.managers.includes(managerId));
  // const cria um array com onome completo dos subordinados;
  const respName = responsibleFor.map((element) => `${element.firstName} ${element.lastName}`);
  if (isManager(managerId)) {
    return respName;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
