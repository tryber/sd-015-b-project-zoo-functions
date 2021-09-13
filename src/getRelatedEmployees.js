const data = require('../data/zoo_data');
const {stephanieId, olaId, burlId} = data; // Importa variável que armazena as ids dos managers diretamente do zoo_data

const managers = [stephanieId, olaId, burlId];

function isManager(id) {
  // seu código aqui
  const idIsManager = managers.includes(id);
  return idIsManager;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const resultOfId = isManager(managerId); // Resultado da verificação do ID (retorna True ou False);
  // console.log(resultOfId); // [REBUG] Consola o retorno da função isManager;
  // Cria uma condicional onde, se resultOfId === true, executa a função que mostra quem essa pessoa gerencia
  // Se não, retorna o erro: 'O id inserido não é de uma pessoa colaboradora gerente!';
  if (resultOfId === true) {
    // console.log(`resultOfId === ${resultOfId}`); // [DEBUG] Verifica o retorno da função
    // return `resultOfId === ${resultOfId}`; // [DEBUG] Verifica o retorno da função
  }

  return 'O id inserido não é de uma pessoa colaboradora gerente!';
}

// getRelatedEmployees('123456');
// console.log(getRelatedEmployees('123456')); // [DEBUG] Verifica retorno da Função
// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992')); // [DEBUG] Retorna True

module.exports = { isManager, getRelatedEmployees };

// LÓGICA DO DESENVOLVIMENTO:
// ** Recebe a chamada da função com a Id de um funcionário do Zoológico.
// ** Verifica, através da função isManager, se aquela Id corresponde a Id de uma pessoa Gerente do Zoológico.
// Se sim, a função retorna true, se não, retorna false;
// ** Com base no retorno dessa função secundária, a função primária verifica se o mesmo é true ou false
// ** Se True, Executa o Array.map, que irá buscar os funcionários gerenciados pela pessoa informada no campo responsibleFor
// Retornando um Array com os funcionários que essa pessoa gerencia
// ** Se false, retorna uma mensagem no formado: "O id inserido não é de uma pessoa colaboradora gerente!"
