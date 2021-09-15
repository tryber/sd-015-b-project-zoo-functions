const data = require('../data/zoo_data');

const generateScheduleByWeekday = (weekday) => {
  let officeHour;
  let exhibition;
  if (weekday === 'Monday') {
    officeHour = 'CLOSED';
    exhibition = 'The zoo will be closed!';
  } else {
    const species = data.species.filter(({ availability }) => availability.includes(weekday));
    officeHour = `Open from ${data.hours[weekday].open}am until ${data.hours[weekday].close}pm`;
    exhibition = species.map(({ name }) => name);
  }
  return {
    officeHour,
    exhibition,
  };
};

function getSchedule(scheduleTarget) {
  const weekdays = Object.keys(data.hours);
  const animals = data.species.map(({ name }) => name);
  const targets = weekdays.concat(animals);
  if (!scheduleTarget || !targets.includes(scheduleTarget)) {
    const schedule = {};
    weekdays.forEach((weekday) => { schedule[weekday] = generateScheduleByWeekday(weekday); });
    return schedule;
  }
  if (weekdays.includes(scheduleTarget)) {
    const schedule = {};
    schedule[scheduleTarget] = generateScheduleByWeekday(scheduleTarget);
    return schedule;
  }
  if (animals.includes(scheduleTarget)) {
    return data.species.find(({ name }) => name === scheduleTarget).availability;
  }
}

module.exports = getSchedule;
