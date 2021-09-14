const data = require('../data/zoo_data');

const { species } = data;

const printAllData = () => {
  // console.log(`Função chamada quando todos os dados serão exibidos`);
  // Esta função deve buscar, no array species cada specie e mostrar uma mensagem
  /*
  'Dia': {
    'HorárioDeFuncionamento': 'Open from 8am until 6pm',
    'AnimaisEmExibição': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
  },
  // EX:
  'Sunday': {
    'officeHour': 'Open from 8am until 8pm',
    'exhibition': [ 'lions', 'bears', 'penguins', 'snakes', 'elephants' ],
  },
};
 */
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