const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  // Ideia para forma de verificação do isManager veio de dica do colega Erickson Siqueira,
  // em uma thread no slack aberta no dia do projeto
  const verifyManager = employees.some(({ managers }) => managers.includes(id));

  return verifyManager;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const validation = isManager(managerId);
  if (!validation) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const namesManagers = employees.filter(({ managers }) => managers.join('') === managerId);
  const result = namesManagers.map(({ firstName, lastName }) => `${firstName} ${lastName}`);

  return result;
}

module.exports = { isManager, getRelatedEmployees };
