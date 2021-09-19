const data = require('../data/zoo_data');

const { species } = data;
const zooSchedule = data.hours;
const hours = Object.entries(zooSchedule);

function getDaysSchedules(zooHours) {
  const schedule = {};
  zooHours.forEach((day) => {
    const currentDay = day[0];
    if (currentDay === 'Monday') {
      schedule[`${currentDay}`] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      schedule[`${currentDay}`] = {
        officeHour: `Open from ${day[1].open}am until ${day[1].close}pm`,
        exhibition: species
          .filter((animal) => animal.availability.includes(currentDay))
          .map((animal) => `${animal.name}`) };
    }
  });
  return schedule;
}

function verifySearchParameter(parameter) {
  const animals = species.find((animal) => animal.name === parameter);
  const days = hours.every((day) => day[0] !== parameter);

  if (animals === undefined || days === true) {
    return getDaysSchedules(hours);
  }
}

function handleMonday() {
  return { Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!' } };
}

function getDaySchedule(zooHours, scheduleTarget) {
  const schedule = {};
  zooHours.forEach((day) => {
    const currentDay = day[0];
    if (scheduleTarget === currentDay) {
      schedule[`${currentDay}`] = {
        officeHour: `Open from ${day[1].open}am until ${day[1].close}pm`,
        exhibition: species
          .filter((animal) => animal.availability.includes(currentDay))
          .map((animal) => `${animal.name}`) };
    }
  });
  return schedule;
}

function handleDayScheduleParameter(parameter) {
  const days = hours.some((day) => day[0] === parameter);
  if (days === true && parameter !== 'Monday') {
    return getDaySchedule(hours, parameter);
  }
}

function getAnimalDays(zooAnimal) {
  const animal = species.find((beast) => beast.name === zooAnimal);
  return animal.availability;
}

function handleAnimalScheduleParameter(parameter) {
  const animal = species.some((beast) => beast.name === parameter);
  if (animal === true) {
    return getAnimalDays(parameter);
  }
}

function handleScheduleComplexity(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return getDaysSchedules(hours);
  }
  if (scheduleTarget === 'Monday') {
    return handleMonday();
  }
}

function getSchedule(scheduleTarget) {
  // 1- Caso schedule seja undefined ou 'Monday'
  return handleScheduleComplexity(scheduleTarget)
  // 2- Caso schedule seja um dia qualquer diferente de Monday
  || handleDayScheduleParameter(scheduleTarget)
  // 3- Caso schedule seja um animal
  || handleAnimalScheduleParameter(scheduleTarget)
  // 4- Caso schedule não seja um animal nem um dia da semana
  || verifySearchParameter(scheduleTarget);
}

module.exports = getSchedule;
