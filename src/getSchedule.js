const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

// A função é responsável por disponibilizar as informações de horário dos animais em uma consulta para o usuário, que pode querer ter acesso ao cronograma da semana, de um dia ou de um animal em específico.

// - analise os testes unitários para entender os retornos que são esperados para esta função;
// - quebre o problema em funções menores para que fique mais simples de administrar a responsabilidade de cada uma delas.

function getSchedule(scheduleTarget) {
  // chama função pra parâmetro vazio - retorna dia/hora de todos animais
  // chama função pra parâmetro preenchido - retorna dia/hora


}

module.exports = getSchedule;

// se não passar nenhuma animal, retorna todos animais e horários.

// se passar animal, pega dia e hora que ele ta disponível
