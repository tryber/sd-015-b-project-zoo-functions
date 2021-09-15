const data = require('../data/zoo_data');

const { species, hours } = data;

const days = Object.keys(hours);

function argNull() { // Retornado quando nenhum argumento é passado, ou argumento é inválido
  const objetoComDias = {};
  days.forEach((day) => {
    const messageOffice = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
    const animaisExibicao = species
    .filter( (animal) => animal.availability
    .includes(day))
    .map((day) => day.name);
    if (day === 'Monday') {
      objetoComDias[day] = `{ 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' }`;
    } else {
      objetoComDias[day] = `{ 'officeHour': '${messageOffice}','exhibition': '[ ${animaisExibicao.join(`, `)} ]'}`;
    }
  });
  return objetoComDias;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  const objetoRetorno = {};
  const found = days.includes(scheduleTarget);

  if(found) { // Se encontrar o nome do dia passado no: diasDaSemana
    // console.log("ENCONTRADO!!!");
    days.forEach((day) => {
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
// console.log(getSchedule('abc')); // Elemento Inválido
console.log(getSchedule('Thursday')); // Elemento Válido

module.exports = getSchedule;
