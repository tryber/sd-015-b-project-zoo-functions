const data = require('../data/zoo_data');

const {species} = data;

const printAllData = () => {
  console.log(`Função chamada quando todos os dados serão exibidos`);
  const objComtodosOsAnimais = {};
  return objComtodosOsAnimais;
}

function getSchedule(scheduleTarget) {
  // seu código aqui

  if (!scheduleTarget || scheduleTarget != 'a') {
    return printAllData();
  }
  return 'Retorno da Função Principal';
}

console.log(getSchedule());

module.exports = getSchedule;

// LÓGICA DA FUNÇÃO:
// ** A função é chamada, com ou sem parâmetro
// **** Se o parâetro não é passado, ou não é encontrado, retorna-se um objeto
// com o dia, horário de funcionamento daquele dia, e animais em exibição.
// ** Se o parâmetro é passado, a arrowFunction retorna um obj construído com reduce,
// com todos os dias e horários que aquele animal está disponível
// ** 