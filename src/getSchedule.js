const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const nameAnimals = species.map((name) => name.name);

const availDays = (day) => {
  const animals = species.filter((animal) =>
    animal.availability.some((availDay) => availDay === day));
  const hour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
  if (day === days[6]) {
    return { officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!' };
  }
  return { officeHour: hour,
    exhibition: animals.map((animal) => animal.name),
  };
};

const schedule = {
  Tuesday: availDays('Tuesday'),
  Wednesday: availDays('Wednesday'),
  Thursday: availDays('Thursday'),
  Friday: availDays('Friday'),
  Saturday: availDays('Saturday'),
  Sunday: availDays('Sunday'),
  Monday: availDays('Monday'),
};

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return schedule;
  if (!nameAnimals.find((value) => value === scheduleTarget)
  && !days.find((value) => value === scheduleTarget)) return schedule;
  if (nameAnimals.find((item) =>
    item === scheduleTarget)) {
    return species.find((el) => el.name === scheduleTarget).availability;
  }
  return { [scheduleTarget]: availDays(scheduleTarget) };
}

module.exports = getSchedule;
