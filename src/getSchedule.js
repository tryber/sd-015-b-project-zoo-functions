const data = require('../data/zoo_data');

const { species, hours } = data;

const days = Object.keys(hours);
const allSpecies = species.map((specie) => specie.name);

function argNull(messageOffice, exibicaoDoDia) {
  const argNullObj = {};
  days.forEach((day) => {
    const messageOffice2 = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
    const exibicaoDoDia2 = species
      .filter((animal) => animal.availability.includes(day)).map((mDay) => mDay.name);
    if (day === 'Monday') {
      argNullObj[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      argNullObj[day] = {
        officeHour: messageOffice2,
        exhibition: exibicaoDoDia2,
      };
    }
  });
  return argNullObj;
}

function argDay(day) {
  const argDayObj = {};
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
  return argDayObj;
}
function argAnimal(animal) {
  // let argAnimalObj = {};
  const findAnimal = species.find((specie) => specie.name === animal);
  // if (specie.name === animal) {
  //   argAnimalObj = specie.availability;
  //   // console.log("ESTOU AQUI!!!");
  // }
  // });
  // return argAnimalObj;
  return findAnimal.availability;
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
