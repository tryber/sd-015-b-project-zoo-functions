const data = require('../data/zoo_data');

const { species, hours } = data;

// const printAllData = () => {
//   // const objComtodosOsAnimais = {};
//   // return objComtodosOsAnimais;
// };
// // console.log(printAllData());

function getSchedule(scheduleTarget) {
  // seu código aqui
  const objetoRetorno = {};
  const diasDaSemana = Object.keys(hours);
  const found = diasDaSemana.includes(scheduleTarget);

  diasDaSemana.forEach((day) => {
    if (day === 'Monday') {
      objetoRetorno[day] = { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' };
    } else {
      objetoRetorno[day] = `{Open from ${hours[day].open}am until ${hours[day].close}pm}`;
    }
  });

  if (!scheduleTarget || !found) {
    // console.log("Objeto não informado, ou não encontrado!");
    // console.log(`Valor do Objeto: ${scheduleTarget}`);
    // console.log(found);
  }
  // console.log(diasDaSemana);


  return objetoRetorno;
}

console.log(getSchedule()); // Elemento Vazio
// console.log(getSchedule('abc')); // Elemento Inválido
// console.log(getSchedule('Thursday')); // Elemento Válido

module.exports = getSchedule;

// LÓGICA DA FUNÇÃO:
// ** A função é chamada, com ou sem parâmetro
// **** Se o parâetro não é passado, ou não é encontrado, retorna-se um objeto
// com o dia, horário de funcionamento daquele dia, e animais em exibição.
// ** Se o parâmetro é passado, a arrowFunction retorna um obj construído com reduce,
// com todos os dias e horários que aquele animal está disponível
// **
