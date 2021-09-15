const { hours, species } = require('../data/zoo_data');

function generateSchedule() {
  const schedule = {};
  Object.keys(hours).forEach((day) => {
    const officeHour = hours[day];
    const { open, close } = officeHour;
    const filteredByDay = species.filter(({ availability }) => availability.includes(day));
    const namesByDay = filteredByDay.map(({ name }) => name);
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
  const scheduleSelected = generateSchedule()[scheduleTarget];

  scheduleOfDay[scheduleTarget] = scheduleSelected;

  return scheduleOfDay;
}

function filteredByAnimal(animal) {
  return species.find(({ name }) => name === animal).availability;
}

function getSchedule(scheduleTarget) {
  const weekday = Object.keys(hours);
  const animals = species.map(({ name }) => name);
  const haveWeekday = weekday.includes(scheduleTarget);
  const haveAnimal = animals.includes(scheduleTarget);

  if (haveWeekday) return filterByDay(scheduleTarget);
  if (haveAnimal) return filteredByAnimal(scheduleTarget);

  return generateSchedule();
}

module.exports = getSchedule;
