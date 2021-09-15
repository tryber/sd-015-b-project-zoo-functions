const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const daysOfWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const animalsName = species.map((animal) => animal.name);

// cria o array com os animais do dia
function animalsAvaliables(day) {
  return species.filter((animal) => animal.availability.includes(day)).map((animal) => animal.name);
}

// cria o texto com o horario de exibição
function hoursAvailable(day) {
  return `Open from ${hours[day].open}am until ${hours[day].close}pm`;
}

// cria um objeto com officeHour e exhibition
function createObj(day) {
  if (day === 'Monday') {
    return { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  }
  return {
    officeHour: hoursAvailable(day),
    exhibition: animalsAvaliables(day),
  };
}

// cria um objeto com o horario de funcionamento e animais disponiveis
function createDayExhibition(day) {
  const dayExhibition = {};
  dayExhibition[day] = createObj(day);
  return dayExhibition;
}

// cria um objeto com todos os dias da semana
function allDaysExhibition() {
  return daysOfWeek.reduce((acc, day) => {
    acc[day] = createObj(day);
    return acc;
  }, {});
}

// função que retorna um array com os dias da semana que um animal esta em exibição
function daysInExhibition(animalName) {
  return species.find((animal) => animal.name === animalName).availability;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (daysOfWeek.includes(scheduleTarget)) {
    return createDayExhibition(scheduleTarget);
  }

  if (animalsName.includes(scheduleTarget)) {
    return daysInExhibition(scheduleTarget);
  }
  return allDaysExhibition();
}

module.exports = getSchedule;
