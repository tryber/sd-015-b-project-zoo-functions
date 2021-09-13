const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((funcionario) => funcionario.managers.includes(id));
}
//  Procuramos por chaves managers, que são os responsaveis por aquela pessoa.
//  quando esse id aparece em algum funcionario, ou seja,  true. Quer dizer que ela é uma gerente.

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  //  Quando o id não existe !funct(id) ele gera essa mensagem de erro.
  return employees.filter((funcionario) => funcionario.managers.includes(managerId))
    .map((funcionario) => `${funcionario.firstName} ${funcionario.lastName}`);
  //  então como esse id passou pelo if e sim é um diretor, vamos filtrar todo os objetos
  //  que tem ele como diretor e fazer um array com a mensagem com nome e sobrenome das pessoas
  //  que aquele diretor comanda.
}

module.exports = { isManager, getRelatedEmployees };
