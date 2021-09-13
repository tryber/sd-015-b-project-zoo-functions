const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };

// LÓGICA DO DESENVOLVIMENTO:
// ** Recebe a chamada da função com a Id de um funcionário do Zoológico.
// ** Verifica, através de uma nova função, se aquela Id corresponde a Id de uma pessoa Gerente do Zoológico.
// Se sim, a função retorna true, se não, retorna false;
// ** Com base no retorno dessa função secundária, a função primária verifica se o mesmo é true ou false
// ** Se True, Executa o Array.map, que irá buscar os funcionários gerenciados pela pessoa informada no campo responsibleFor
// Retornando um Array com os funcionários que essa pessoa gerencia
// ** Se false, retorna uma mensagem no formado: "O id inserido não é de uma pessoa colaboradora gerente!"
