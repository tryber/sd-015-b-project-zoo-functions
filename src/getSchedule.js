const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getDailySpecies(day) {
  return species.filter(({ availability }) => availability.includes(day))
    .map(({ name }) => name);
}

function getMonday() {
  return {
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
}

function getWeekSchedule(target) {
  let weekDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  if (weekDays.includes(target)) {
    weekDays = [target];
  }
  const schedule = {};
  weekDays.forEach((day) => {
    schedule[day] = ({
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: getDailySpecies(day),
    });
  });
  if (Object.keys(schedule).includes('Monday')) {
    Object.assign(schedule, getMonday());
  }
  return schedule;
}

function getCreatureScheduale(creature) {
  return species.find(({ name }) => name === creature).availability;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  return species.map(({ name }) => name).includes(scheduleTarget)
    ? getCreatureScheduale(scheduleTarget) : getWeekSchedule(scheduleTarget);
}

module.exports = getSchedule;
