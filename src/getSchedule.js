const data = require('../data/zoo_data');

const { species, hours } = data;

const closedMessage = `'CLOSED', 'exhibition': 'The zoo will be closed!'`;
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
  const argAnimalObj = {};
  species.find( (specie) => {
    if (specie.name === scheduleTarget) {
      objetoRetorno = specie.availability;
      return objetoRetorno;
    }
  });
  return objetoRetorno;
}
// console.log(argAnimal('lions'));

function getSchedule(scheduleTarget) {
  // seu código aqui
  const objetoRetorno = {};
  const dayFound = days.includes(scheduleTarget); // Verifica se argumento passado é um Dia
  const animalFound = allSpecies.includes(scheduleTarget); // Verifica se argumento passado é um Animal

  if (!dayFound && !animalFound) return argNull(); // FUNÇÃO OK
  if (dayFound || animalFound) { // Se é passado um animal ou dia
    if (dayFound) { // Se for um dia
      // console.log("ENTROU DA FUNÇAO ARGDAY");
      return argDay(scheduleTarget);
    }
    if (animalFound) { // Se for um Animal
      return argAnimal(scheduleTarget);
    }
  }
  return objetoRetorno;
}
module.exports = getSchedule;

// console.log(getSchedule());
// console.log(getSchedule('Monday'));
// console.log(getSchedule('lions'));
