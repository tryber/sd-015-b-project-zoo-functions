const data = require('../data/zoo_data');

const { species, hours } = data;

function argNull() {
  const diasSemana = Object.keys(hours);
  const objetoRetornado = {};
  diasSemana.forEach((day) => {
    const messageOffice = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
    const animaisExibicao = species
    .filter( (animal) => animal.availability
    .includes(day))
    .map((day) => day.name);
    if (day === 'Monday') {
      objetoRetornado[day] = `{ 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' }`;
    } else {
      objetoRetornado[day] = `{ 'officeHour': '${messageOffice}','exhibition': '[ ${animaisExibicao.join(`, `)} ]'}`;
    }
  });
  return objetoRetornado;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  const objetoRetorno = {};
  const diasDaSemana = Object.keys(hours);
  const found = diasDaSemana.includes(scheduleTarget);

  if(found) { // Se encontrar o nome do dia passado no: diasDaSemana
    // console.log("ENCONTRADO!!!");
    diasDaSemana.forEach((day) => {
      const messageOffice = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
      const animaisExibicao = species //Verifica as espécies
      .filter( (animal) => animal.availability // Verifica se o animal está disponível naquele dia
      .includes(day)) // Para isso, verifica se o dia passado no scheduleTarget está localizado no specie.avaliability 
      .map((day) => day.name);
      // console.log(animaisExibicao);
      if (day === 'Monday') {
        objetoRetorno[day] = `{ 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' }`;
      } else {
        objetoRetorno[day] = `{ 'officeHour': '${messageOffice}','exhibition': '[ ${animaisExibicao.join(`, `)} ]'}`;
      }
    });
  }
  if (!scheduleTarget || !found) return argNull();
  
  return objetoRetorno;
}

// console.log(getSchedule()); // Elemento Vazio
console.log(getSchedule('abc')); // Elemento Inválido
// console.log(getSchedule('Thursday')); // Elemento Válido

module.exports = getSchedule;

// LÓGICA DA FUNÇÃO:
// ** A função é chamada, com ou sem parâmetro
// **** Se o parâetro não é passado, ou não é encontrado, retorna-se um objeto
// com o dia, horário de funcionamento daquele dia, e animais em exibição.
// ** Se o parâmetro é passado, a arrowFunction retorna um obj construído com reduce,
// com todos os dias e horários que aquele animal está disponível
// **
