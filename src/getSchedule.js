const data = require('../data/zoo_data');

const { species, hours } = data;

function checkAnimalTarget(scheduleTarget) {
  return species.some((oneSpecies) => oneSpecies.name === scheduleTarget);
}

function checkDayTarget(scheduleTarget) {
  return Object.keys(hours).some((day) => day === scheduleTarget);
}

function checkTargetType(scheduleTarget) {
  return checkAnimalTarget(scheduleTarget) || checkDayTarget(scheduleTarget);
}

function checkScheduleTarget(scheduleTarget) {
  let targetOk = true;

  if (!scheduleTarget || !checkTargetType(scheduleTarget)) {
    targetOk = false;
  }

  return targetOk;
}

function getDaysBySpecies(targetAnimal) {
  return species.find((oneSpecies) => oneSpecies.name === targetAnimal).availability;
}

function getSpeciesByDay(day) {
  return species.filter((oneSpecies) => oneSpecies.availability.includes(day))
    .map((oneSpecies) => oneSpecies.name);
}

function createDailySchedule(day) {
  const dailySchedule = {};

  if (day === 'Monday') {
    dailySchedule.officeHour = 'CLOSED';
    dailySchedule.exhibition = 'The zoo will be closed!';
  } else {
    dailySchedule.officeHour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
    dailySchedule.exhibition = getSpeciesByDay(day);
  }

  return dailySchedule;
}

function generateFullSchedule(days) {
  const schedule = {};

  days.forEach((day) => {
    schedule[day] = createDailySchedule(day);
  });

  return schedule;
}

function generateCustomizedSchedule(scheduleTarget) {
  if (checkAnimalTarget(scheduleTarget)) {
    return getDaysBySpecies(scheduleTarget);
  }

  if (checkDayTarget(scheduleTarget)) {
    return generateFullSchedule(scheduleTarget.split());
  }
}

function getSchedule(scheduleTarget) {
  const fullWeek = Object.keys(hours);

  if (!checkScheduleTarget(scheduleTarget)) {
    return generateFullSchedule(fullWeek);
  }

  return generateCustomizedSchedule(scheduleTarget);
}

console.log('Tuesday'.split());

module.exports = getSchedule;
