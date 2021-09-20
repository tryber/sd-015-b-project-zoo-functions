const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOfficeHour(day) {
  if (day !== 'Monday') {
    return `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
  }
  return 'The zoo will be closed!';
}

const getAnialList = () => species.map(({ name }) => name);

const getAnimal = (AnimalName) => species
  .find(({ name }) => AnimalName === name).availability;

function getSchedule(scheduleTarget) {
  const listDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const animals = getAnialList();

  if (listDays.includes(scheduleTarget)) {
    return { [scheduleTarget]: getOfficeHour(scheduleTarget) };
  }

  if (animals.includes(scheduleTarget)) {
    return getAnimal(scheduleTarget);
  }
  return listDays.reduce((acc, day) => ({ ...acc, [day]: getOfficeHour(day) }), {});
}

module.exports = getSchedule;
