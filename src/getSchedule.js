const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

const objectEntries = Object.entries(hours);

function hourAndAnimals() {
  const object = {};
  objectEntries.forEach((day) => {
    const { open, close } = day[1];
    Object.assign(object, { [day[0]]: {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: species
        .filter(({ availability }) => availability.includes(day[0]))
        .map(({ name }) => name),
    },
    });
  });
  object.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return object;
}

function dayWeek(scheduleTarget) {
  return { [scheduleTarget]: hourAndAnimals()[scheduleTarget] };
}

function animale(scheduleTarget) {
  return species.find((animal) => animal.name === scheduleTarget).availability;
}

function getSchedule(scheduleTarget) {
  if (Object.keys(hours).includes(scheduleTarget)) return dayWeek(scheduleTarget);
  if (species.map(({ name }) => name).includes(scheduleTarget)) return animale(scheduleTarget);
  return hourAndAnimals();
}

module.exports = getSchedule;
