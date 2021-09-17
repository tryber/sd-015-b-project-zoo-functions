const data = require('../data/zoo_data');

const { species, hours } = data;

const days = Object.keys(hours);
const allSpecies = species.map( (specie) => specie.name);
// console.log(days);

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

function argDay(day) {
  const argDayObj = {};
  if (day === 'Monday') {
    // console.log("That's Working!");
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
  return argDayObj;
}
function argAnimal(scheduleTarget) {
  let argAnimalObj = {};
  species.find( (specie) => {
    if (specie.name === scheduleTarget) {
      argAnimalObj = specie.availability;
    }
  });
  return argAnimalObj;
}
function getSchedule(scheduleTarget) {
  // seu código aqui
  const objetoRetorno = {};
  const schedule = scheduleTarget;
  const dayFound = days.includes(scheduleTarget);
  const animalFound = allSpecies.includes(scheduleTarget);
  if (!dayFound && !animalFound) return argNull();
  if (dayFound) return argDay(schedule);
  if (animalFound) return argAnimal(schedule);
  return objetoRetorno;
}
module.exports = getSchedule;
