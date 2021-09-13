const data = require('../data/zoo_data');

const days = Object.keys(data.hours);

const getSpeciesNameByDay = (day) => data.species
  .filter(({ availability }) => availability.includes(day))
  .map(({ name }) => name);

const createDayDisplay = (hour, animals, day) => ({
  officeHour: hour,
  exhibition: typeof animals === 'function' ? animals(day) : animals,
});

const createDaysSchedule = (acc, day) => {
  acc[day] = acc[day] || {};
  const daySchedule = data.hours[day];
  const { open, close } = daySchedule;
  const scheduleObject = open && close
    ? createDayDisplay(`Open from ${open}am until ${close}pm`, getSpeciesNameByDay, day)
    : createDayDisplay('CLOSED', 'The zoo will be closed!');
  acc[day] = scheduleObject;
  return acc;
};

const findSpecie = (scheduleTarget) => data.species.find(({ name }) =>
  name === scheduleTarget).availability;

const isDay = (scheduleTarget, singleDay) => {
  const noParameter = !scheduleTarget;
  const invalidParameter = !days.includes(scheduleTarget);
  return noParameter || invalidParameter || singleDay;
};

function getDaySchedule(scheduleTarget, isSingleDay) {
  const dates = isSingleDay ? [scheduleTarget] : days;
  const schedule = dates.reduce(createDaysSchedule, {});
  return schedule;
}

function getAnimalSchedule(scheduleTarget) {
  const schedule = findSpecie(scheduleTarget);
  return schedule;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  const isSingleDay = days.includes(scheduleTarget);
  const isDaySchedule = isDay(scheduleTarget, isSingleDay);

  const schedule = isDaySchedule ? getDaySchedule(isSingleDay) : getAnimalSchedule();

  return schedule;
}

  // const isAnimal = data.species.some(({ name }) => name === 
  // scheduleTarget);
  // const validParameter = scheduleTarget && !singleDay && !isAnimal;
  // const isDate = singleDay || !scheduleTarget || validParameter
  // let schedule;
  // if (singleDay || !scheduleTarget || validParameter) {
  //   const dates = singleDay ? [scheduleTarget] : days;
  //   schedule = dates.reduce(getsDaysSchedule, {}); 
  // } else if (isAnimal) {
  // }

console.log(getSchedule('Monday'));

module.exports = getSchedule;
