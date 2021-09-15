const data = require('../data/zoo_data');

function exhibition(day) {
  return data.species.filter((specie) => specie.availability.includes(day)).map(({ name }) => name);
}

function allSchedule() {
  const schedule = { Tuesday: {},
    Wednesday: {},
    Thursday: {},
    Friday: {},
    Saturday: {},
    Sunday: {},
    Monday: {} };
  Object.keys(data.hours).forEach((day) => {
    schedule[day].officeHour = `Open from ${data.hours[day].open}am until ${data.hours[day]
      .close}pm`;
    schedule[day].exhibition = exhibition(day);
    if (day === 'Monday') {
      schedule[day] = { officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!' };
    }
  });
  return schedule;
}

function scheduleDay(day) {
  const allDays = allSchedule();
  const AgendaDay = {};
  AgendaDay[day] = allDays[day];
  return AgendaDay;
}

function getSchedule(scheduleTarget) {
  let schedule = {};
  schedule = allSchedule();
  const arrayWithAllSpecies = data.species.map(({ name }) => name);
  if (arrayWithAllSpecies.includes(scheduleTarget)) {
    schedule = data.species.find((specie) => specie.name === scheduleTarget).availability;
  }
  if (Object.keys(data.hours).includes(scheduleTarget)) {
    schedule = scheduleDay(scheduleTarget);
  }
  return schedule;
}

module.exports = getSchedule;
