const data = require('../data/zoo_data');

const { species, hours } = data;

const closedMessage = `'CLOSED', 'exhibition': 'The zoo will be closed!'`;
const days = Object.keys(hours);
const allSpecies = species.map( (specie) => specie.name);

function argNull() {
  const dataObj = {};
  days.forEach((day) => {
    const messageOffice = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
    const exibicaoDoDia = species
    .filter((animal) => animal.availability.includes(day)).map((mDay) => mDay.name);
      if (day === 'Monday') {
        dataObj[day] = {
          officeHour: 'CLOSED',
          exhibition: 'The zoo will be closed!',
        };
      } else {
        dataObj[day] = {
          officeHour: messageOffice,
          exhibition: exibicaoDoDia,
        };
      }
  });
  return dataObj;
}
// console.log(argNull()); [DEBUG]

function getSchedule(scheduleTarget) {
  // seu código aqui
  let objetoRetorno = {};
  const dayFound = days.includes(scheduleTarget); // Verifica se argumento passado é um Dia
  const animalFound = allSpecies.includes(scheduleTarget); // Verifica se argumento passado é um Animal

  if (!dayFound && !animalFound) return argNull(); // FUNÇÃO OK

  return objetoRetorno;
}

module.exports = getSchedule;

// console.log(getSchedule());
