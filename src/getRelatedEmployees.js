const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const checkRelated = employees.filter(
      (employee) => employee.managers.includes(managerId) === true,
    );
    return checkRelated.map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
}

module.exports = { isManager, getRelatedEmployees };

// 1 -isManager - que será responsável por verificar se uma pessoa colaboradora é gerente ou não. O retorno dessa função deve ser um booleano: true ou false;
// 2 - getRelatedEmployees - que utiliza a primeira função para apresentar as seguintes saídas:
// Retorna true se o id passado for de um gerente;
// Retorna false se o id passado não for de um gerente;
// Se o id passado for de um gerente, retorna um array contendo nome e sobrenome das pessoas colaboradoras que ela é responsável;
// Se o id passado não for de um gerente, dispara um erro com a mensagem: "O id inserido não é de uma pessoa colaboradora gerente!".
