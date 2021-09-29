const data = require('../data/zoo_data');

const daysOfTheWeek = ['Tuesday',
  'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

const animals = [];
data.species.forEach((specie) => {
  animals.push(specie.name);
});

const daysSchedule = {};
daysOfTheWeek.forEach((day) => {
  daysSchedule[`${day}`] = {};
  if (day === 'Monday') {
    daysSchedule[`${day}`].officeHour = 'CLOSED';
  } else {
    const string = `Open from ${data.hours[`${day}`].open}am until ${data.hours[`${day}`].close}pm`;
    daysSchedule[`${day}`].officeHour = string;
  }
});

daysOfTheWeek.forEach((day) => {
  if (day === 'Monday') {
    daysSchedule[`${day}`].exhibition = 'The zoo will be closed!';
  } else {
    daysSchedule[`${day}`].exhibition = [];
    const animalsInThisDay = data.species.filter((specie) => specie.availability.includes(day));
    animalsInThisDay.forEach((specie) => daysSchedule[`${day}`].exhibition.push(specie.name));
  }
});

const checkAnimalParameter = (scheduleTarget) => {
  if (animals.some((specie) => specie === scheduleTarget)) {
    return true;
  }
  return false;
};

const checkDayParameter = (scheduleTarget) => {
  if (daysOfTheWeek.some((day) => day === scheduleTarget)) {
    return true;
  }
  return false;
};

const checkParameters = (scheduleTarget) => {
  let result = false;
  const checkDay = checkDayParameter(scheduleTarget);
  const checkAnimal = checkAnimalParameter(scheduleTarget);
  if (checkAnimal) {
    result = 'animal';
  }
  if (checkDay) {
    result = 'day';
  }
  return result;
};

const returnAnimal = (scheduleTarget) => {
  const result = data.species.find((animal) => animal.name === scheduleTarget).availability;
  return result;
};

const returnDay = (scheduleTarget) => {
  const result = {};
  result[`${scheduleTarget}`] = daysSchedule[`${scheduleTarget}`];
  return result;
};

const returnDayAnimal = (scheduleTarget, check) => {
  if (check === 'animal') {
    return returnAnimal(scheduleTarget);
  }
  return returnDay(scheduleTarget);
};

function getSchedule(scheduleTarget) {
  if (!checkParameters(scheduleTarget)) {
    return daysSchedule;
  }
  return returnDayAnimal(scheduleTarget, checkParameters(scheduleTarget));
}

getSchedule('Monday');

module.exports = getSchedule;
