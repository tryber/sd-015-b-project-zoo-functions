// const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');
const { hours, species } = require('../data/zoo_data');

const defaultSchedule = () => {
  const getHoursInData = Object.entries(hours);
  const object = {};
  getHoursInData.forEach((day) => {
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
};
function getForDayWeekName(scheduleTarget) {
  return { [scheduleTarget]: defaultSchedule()[scheduleTarget] };
}
function getForAnimaleName(scheduleTarget) {
  return species.find((animal) => animal.name === scheduleTarget).availability;
}
function getSchedule(schedule) {
  if (Object.keys(hours).includes(schedule)) return getForDayWeekName(schedule);
  if (species.map(({ name }) => name).includes(schedule)) return getForAnimaleName(schedule);
  return defaultSchedule();
}

module.exports = getSchedule;
