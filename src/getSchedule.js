const { species, hours } = require('../data/zoo_data');

const getDaySchedule = (day) =>
  (day === 'Monday'
    ? {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    }
    : {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: species.reduce((acc, { availability, name }) =>
        (availability.includes(day) ? [...acc, name] : acc), []),
    });

const getAnimalsList = () => species.map(({ name }) => name);

const getAnimalSchedule = (animalName) =>
  species.find(({ name }) => animalName === name).availability;

const getSchedule = (scheduleTarget) => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const animals = getAnimalsList();

  if (daysOfWeek.includes(scheduleTarget)) {
    return { [scheduleTarget]: getDaySchedule(scheduleTarget) };
  }

  if (animals.includes(scheduleTarget)) {
    return getAnimalSchedule(scheduleTarget);
  }

  return daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: getDaySchedule(day) }), {});
};

module.exports = getSchedule;
