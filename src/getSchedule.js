const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const findSpeciebyDay = (day) => {
  const getSpeciesbyDay = data.species.filter((specie) =>
    specie.availability.includes(day));
  return getSpeciesbyDay.reduce((acc, specie) => {
    acc.push(specie.name);
    return acc;
  }, []);
};

const getHours = (day) => {
  const { open, close } = hours[day];
  return `Open from ${open}am until ${close}pm`;
};

const getDay = (day) => {
  let newObj = {
    officeHour: getHours(day),
    exhibition: findSpeciebyDay(day),
  };
  if (day === 'Monday') {
    newObj = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  }
  return newObj;
};

const getSpecificDay = (day) => {
  const newObj = {};
  newObj[day] = getDay(day);
  return newObj;
};
const isDay = (anyParam) => {
  const days = Object.keys(hours);
  const checkDay = days.some((day) => day === anyParam);
  return checkDay;
};

const getAnimalAvailability = (animal) => {
  const getAnimal = species.find((animaL) => animal === animaL.name);
  return getAnimal.availability;
};
const isAnimal = (anyParam) =>
  data.species.some((animal) => animal.name === anyParam);
const getAllDays = (anyParam) => {
  const days = Object.keys(hours);
  const daysObj = {};
  days.forEach((day) => {
    daysObj[day] = getDay(day);
  });
  return daysObj;
};

const allDays = (scheduleTarget) => {
  const day = !isDay(scheduleTarget);
  const animal = !isAnimal(scheduleTarget);
  const param = !scheduleTarget;
  return (day && animal) || param;
};

function getSchedule(scheduleTarget) {
  if (isAnimal(scheduleTarget) === true) {
    return getAnimalAvailability(scheduleTarget);
  }
  return allDays(scheduleTarget)
    ? getAllDays(scheduleTarget)
    : getSpecificDay(scheduleTarget);
}

module.exports = getSchedule;
