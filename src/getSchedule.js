const data = require('../data/zoo_data');

const { species, hours } = data;

const infoHours = Object.entries(hours);

function zooSchedule() {
  const object = {};
  infoHours.forEach((day) => {
    const { open, close } = day[1];
    Object.assign(object, { [day[0]]: {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: (species.filter(({ availability }) => availability.includes(day[0]))
        .map(({ name }) => name)),
    } });
  });
  object.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return object;
}

const getDays = (scheduleTarget) => ({ [scheduleTarget]: zooSchedule()[scheduleTarget] });

function getAnimals(scheduleTarget) {
  return species.find((specie) => specie.name === scheduleTarget).availability;
}

function getSchedule(scheduleTarget) {
  const checkDays = Object.keys(zooSchedule()).includes(scheduleTarget);
  const checkAnimals = species.map((specie) => specie.name).includes(scheduleTarget);
  if (checkDays) return getDays(scheduleTarget);
  if (checkAnimals) return getAnimals(scheduleTarget);
  return zooSchedule();
}

module.exports = getSchedule;
