const { species, hours } = require('../data/zoo_data');

function getDay(day) {
  if (day === 'Monday') {
    return { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  }

  const hour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;

  const animals = (
    species.filter(({ availability }) => (
      availability.some((availableDay) => (
        availableDay === day
      ))
    ))
  );
  return { officeHour: hour, exhibition: animals.map((item) => item.name) };
}

function createSchedule(scheduleTarget) {
  const schedule = {};
  if (!scheduleTarget) {
    Object.keys(hours).forEach((hour) => {
      schedule[hour] = getDay(hour);
    });
    return schedule;
  }
  return { [scheduleTarget]: getDay(scheduleTarget) };
}

function getSchedule(scheduleTarget) {
  if (Object.keys(hours).includes(scheduleTarget)) {
    return createSchedule(scheduleTarget);
  }
  if (species.some(({ name: specieName }) => specieName === scheduleTarget)) {
    return species.find(({ name: specieName }) => specieName === scheduleTarget).availability;
  }
  return createSchedule();
}

module.exports = getSchedule;
