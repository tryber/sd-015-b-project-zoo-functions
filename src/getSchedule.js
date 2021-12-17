const { species, hours } = require('../data/zoo_data');

const isTargetAnAnimal = (scheduleTarget) => species
  .some(({ name }) => name === scheduleTarget);

const isTargetADay = (scheduleTarget) => Object.keys(hours)
  .some((day) => day === scheduleTarget);

const isTargetTypeValid = (scheduleTarget) => isTargetAnAnimal(scheduleTarget)
|| isTargetADay(scheduleTarget);

const hasScheduleTarget = (scheduleTarget) => (
  (scheduleTarget && isTargetTypeValid(scheduleTarget))
);

const getDaysBySpecies = (animal) => species
  .find(({ name }) => name === animal).availability;

const getSpeciesByDay = (day) => species
  .filter(({ availability }) => availability.includes(day))
  .map(({ name }) => name);

const createDailySchedule = (day) => (day === 'Monday'
  ? { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' }
  : { officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
    exhibition: getSpeciesByDay(day) });

const generateFullSchedule = (days) => days.reduce((schedule, day) => ({
  ...schedule, [day]: createDailySchedule(day),
}), {});

const generateCustomizedSchedule = (scheduleTarget) => (isTargetAnAnimal(scheduleTarget)
  ? getDaysBySpecies(scheduleTarget) : generateFullSchedule([scheduleTarget]));

const getSchedule = (scheduleTarget) => (hasScheduleTarget(scheduleTarget)
  ? generateCustomizedSchedule(scheduleTarget)
  : generateFullSchedule(Object.keys(hours)));

module.exports = getSchedule;
