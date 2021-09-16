const data = require('../data/zoo_data');

const { species, hours } = data;

const days = Object.keys(hours);
const allspecies = [];
const checkSpecies = species.map( (specie) => {
  allspecies.push(specie.name);
})
console.log(allspecies);

function argNull() {

  const dataObj = {};
  
  days.forEach((day) => {
    const messageOffice = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
    const animaisExibicao = species
    .filter( (animal) => animal.availability
    .includes(day))
    .map((day) => day.name);
    if (day === 'Monday') {
      dataObj[day] = `{ 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' }`;
    } else {
      dataObj[day] = `{ 'officeHour': '${messageOffice}','exhibition': '[ ${animaisExibicao.join(`, `)} ]'}`;
    }
  });
  return dataObj;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  const objetoRetorno = {};
  const dayFound = days.includes(scheduleTarget);

  // if(found) { // Se encontrar o nome do dia passado no: diasDaSemana
    // console.log("ENCONTRADO!!!");
  //   days.forEach((day) => {
  //     const messageOffice = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
  //     const animaisExibicao = species //Verifica as espécies
  //     .filter( (animal) => animal.availability // Verifica se o animal está disponível naquele dia
  //     .includes(day)) // Para isso, verifica se o dia passado no scheduleTarget está localizado no specie.avaliability 
  //     .map((day) => day.name);
  //     // console.log(animaisExibicao);
  //     if (day === 'Monday') {
  //       objetoRetorno[day] = `{ 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' }`;
  //     } else {
  //       objetoRetorno[day] = `{ 'officeHour': '${messageOffice}','exhibition': '[ ${animaisExibicao.join(`, `)} ]'}`;
  //     }
  //   });
  // }
  if (!scheduleTarget /*|| !found*/) return argNull();
  
  return objetoRetorno;
}

// console.log(getSchedule()); // Elemento Vazio
// console.log(getSchedule('abc')); // Elemento Inválido
console.log(getSchedule('Thursday')); // Elemento Válido

module.exports = getSchedule;
