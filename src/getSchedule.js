const data = require('../data/zoo_data');

function exhibition(day) {
  return data.species.filter((specie) => specie.availability.includes(day)).map(({ name }) => name);
}

function showHours() {
  const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const hour = {};
  days.forEach((day) => {
    const { open } = data.hours[day];
    const { close } = data.hours[day];
    hour[day] = {};
    if (open === 0 || close === 0) {
      hour[day].officeHour = 'CLOSED';
      hour[day].exhibition = 'The zoo will be closed!';
    } else {
      hour[day].officeHour = `Open from ${open}am until ${close}pm`;
      hour[day].exhibition = exhibition(day);
    }
  });
  return hour;
}

function daySchedule(day) {
  const everyHours = showHours();
  const agendaOfTheDay = {};
  agendaOfTheDay[day] = everyHours[day];
  return agendaOfTheDay;
}

function animalSchedule(animal) {
  return data.species.find((specie) => specie.name.includes(animal)).availability;
}

function getSchedule(scheduleTarget) {
  const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const animals = data.species.map(({ name }) => name);
  if (animals.includes(scheduleTarget)) return animalSchedule(scheduleTarget); // Pesquisa por animal
  if (days.includes(scheduleTarget)) return daySchedule(scheduleTarget); // Pesquisa por dia
  return showHours(); // Pesquisa vazia
}

module.exports = getSchedule;
