const data = require('../data/zoo_data');

const { species, hours } = data;

// Mapeia os animais por dia
function exhibition(day) {
  return species.filter((especies) => especies.availability.includes(day)).map(({ name }) => name);
}
// Pegar os dias e retorna as horas de funcionamento e animais
function openDays() {
  const days = {};
  Object.keys(hours).forEach((day) => {
    days[day] = {};
    // Cria o officeHour com os horarios de funcionamento por dia
    days[day].officeHour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
    // Adiciona os animais exibidos por dia
    days[day].exhibition = exhibition(day);
    // Corrige o horario de funcionamento da segunda, retornando oque foi pedido no teste
    if (day === 'Monday') {
      days[day].officeHour = 'CLOSED';
      days[day].exhibition = 'The zoo will be closed!';
    }
  });
  return days;
}
// Ajusta a função openDays quando é passado um unico dia
function uniqueDay(day) {
  const objectDays = openDays();
  const selectedDay = {};
  selectedDay[day] = objectDays[day];
  return selectedDay;
}

// Mostra os dias de disponibilidade para o animal passado
function uniqueAnimal(animal) {
  return species.find((especie) => especie.name === animal).availability;
}

function getSchedule(scheduleTarget) {
  if (species.map((especie) => especie.name).includes(scheduleTarget)) {
    return uniqueAnimal(scheduleTarget);
  }
  if (Object.keys(hours).includes(scheduleTarget)) {
    return uniqueDay(scheduleTarget);
  }
  return openDays();
}

module.exports = getSchedule;
