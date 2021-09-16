const data = require('../data/zoo_data');

const { species, hours } = data;

const closedMessage = `'CLOSED', 'exhibition': 'The zoo will be closed!'`;
const days = Object.keys(hours);
const allSpecies = species.map( (specie) => specie.name);

function argNull(messageOffice, exibicaoDoDia) {
  const argNullObj = {};
  days.forEach((day) => {
    const messageOffice = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
    const exibicaoDoDia = species
    .filter((animal) => animal.availability.includes(day)).map((mDay) => mDay.name);
    if (day === 'Monday') {
      argNullObj[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      argNullObj[day] = {
        officeHour: messageOffice,
        exhibition: exibicaoDoDia,
      };
    }
  });
  return argNullObj;
}
// console.log(argNull()); // [DEBUG]

function argDay(scheduleTarget) {
  const argDayObj = {};
  days.find( (day) =>{
    if(day === scheduleTarget) {
      if (day === 'Monday') {
        argDayObj[day] = {
          officeHour: 'CLOSED',
          exhibition: 'The zoo will be closed!',
        };
      } else {
        argDayObj[day] = {
          officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
          exhibition: species
          .filter((animal) => animal.availability.includes(day)).map((mDay) => mDay.name),
        };
      }
    }
  });
  return argDayObj;
}
// console.log(argDay('Monday'));
// console.log(argDay('Sunday'));
// console.log(argDay('Saturday'));

function getSchedule(scheduleTarget) {
  // seu código aqui
  const objetoRetorno = {};
  const dayFound = days.includes(scheduleTarget); // Verifica se argumento passado é um Dia
  const animalFound = allSpecies.includes(scheduleTarget); // Verifica se argumento passado é um Animal

  if (!dayFound && !animalFound) return argNull(); // FUNÇÃO OK
  if (dayFound || animalFound) { // Se é passado um animal ou dia
    if (dayFound) { // Se for um dia
      argDay(scheduleTarget);
    }
    if (animalFound) { // Se for um Animal
      argAnimal(scheduleTarget);
    }
  }
  return objetoRetorno;
}
module.exports = getSchedule;

console.log(getSchedule());
