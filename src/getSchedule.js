const { species, hours } = require('../data/zoo_data');

const getAllAnimalsByWeekDay = (weekDay) => {
  const allAnimals = [];
  species.filter(({ name, availability }) =>
    availability.forEach((day) => {
      if (day === weekDay) return allAnimals.push(name);
    }));
  return allAnimals;
};

const getAllSchedules = () => {
  const allSchedules = {};
  Object.entries(hours).forEach((day) => {
    const weekDay = day[0];
    const openClose = day[1];
    const { open, close } = openClose;
    if (!allSchedules[weekDay]) {
      allSchedules[weekDay] = { officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: getAllAnimalsByWeekDay(weekDay) };
      if (openClose.open === 0 && openClose.close === 0) {
        allSchedules[weekDay] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
      }
    }
  });
  return allSchedules;
};

const gotAnimalName = (receivedAnimal) => {
  const animalName = receivedAnimal;
  const animalInfo = species.find(({ name, availability }) => name === animalName);
  return animalInfo.availability;
};

const countAnimalsThatDay = (receivedDay) => {
  const animalsThatDay = [];
  species.forEach(({ name, availability }) => availability.filter((day) => {
    if (day === receivedDay) animalsThatDay.push(name);
    return animalsThatDay;
  }));
  return animalsThatDay;
};

const gotWeekDay = (receivedDay) => {
  const result = {};
  const openCloseObj = Object.entries(hours)
    .find((day) => ((day[0] === receivedDay) ? day.shift() : ''));
  const { open, close } = openCloseObj[0];

  result[receivedDay] = (open === 0 && close === 0) ? {
    officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } : {
    officeHour: `Open from ${open}am until ${close}pm`,
    exhibition: countAnimalsThatDay(receivedDay) };

  return result;
};

const checkAnimalOrDay = (element) => {
  const animal = species.find(({ name }) => name === element);
  const weekDay = Object.keys(hours).find((day) => day === element);
  if (weekDay === undefined && animal === undefined) return getAllSchedules();
  if (weekDay === undefined) return gotAnimalName(element);
  return gotWeekDay(element);
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (!scheduleTarget) return getAllSchedules();
  return checkAnimalOrDay(scheduleTarget);
}

module.exports = getSchedule;
