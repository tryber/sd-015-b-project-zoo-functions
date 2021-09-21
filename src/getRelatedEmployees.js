const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  // Verifica se o id está dentro de algum campo 'managers' dos outros ids dentro de employees.
  return employees.some((idInput) => idInput.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // Se o employee não for gerente é gerado um erro.
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  // Se o employee 'inputado' for manager essa função primeiro filtra o array employees para buscar dentro da chave 'managers' os 'managerId' e em seguida mapeia esses 'managerId' buscando seus nomes e sobrenomes.
  return employees.filter((employee) => employee.managers
    .includes(managerId))
    .map((employeeName) => `${employeeName.firstName} ${employeeName.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
