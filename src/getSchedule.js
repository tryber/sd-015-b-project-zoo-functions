const { hours, species } = require('../data/zoo_data');

function generateSchedule() {
  const schedule = {};
  Object.keys(hours).forEach((day) => {
    const officeHour = hours[day];
    const { open, close } = officeHour;
    const filteredByDay = species.filter((available) => available.availability.includes(day));
    const namesByDay = filteredByDay.map((specie) => specie.name);
    const tempObj = {};

    tempObj[day] = {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: namesByDay,
    };

    Object.assign(schedule, tempObj);
  });

  schedule.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return schedule;
}

function filterByDay(scheduleTarget) {
  const scheduleOfDay = {};

  scheduleOfDay[scheduleTarget] = generateSchedule()[scheduleTarget];

  return scheduleOfDay;
}

function filteredByAnimal(animal) {
  return species.find((specie) => specie.name === animal).availability;
}

function getSchedule(scheduleTarget) {
  const weekday = Object.keys(hours);
  const animals = species.map((specie) => specie.name);

  if (weekday.includes(scheduleTarget)) return filterByDay(scheduleTarget);
  if (animals.includes(scheduleTarget)) return filteredByAnimal(scheduleTarget);

  return generateSchedule();
}

module.exports = getSchedule;
