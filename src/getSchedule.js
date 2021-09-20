const data = require('../data/zoo_data');

const { species, hours } = data;

const getAnimalSchedule = (animalName) => {
  const { availability } = species.find((specie) => specie.name === animalName);
  return availability;
};

const getAnimalInExhibition = (day) => {
  const animalList = species.filter((specie) => specie.availability.includes(day));
  const animalsInExhibition = animalList.map((animal) => animal.name);

  return animalsInExhibition;
};

const isDayClosed = () => ({ officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' });

const getDaySchedule = (dayName) => {
  const { [dayName]: day } = hours;
  if (day.open === 0) return isDayClosed();

  const officeHour = `Open from ${day.open}am until ${day.close}pm`;
  const exhibition = getAnimalInExhibition(dayName);

  return { officeHour, exhibition };
};

const getWeekSchedule = () => {
  const weekDays = Object.keys(hours);
  const weekSchedule = {};

  weekDays.forEach((day) => {
    weekSchedule[day] = getDaySchedule(day);
  });

  return weekSchedule;
};

const isAWeekDay = (entree) => {
  const weekDays = Object.keys(hours);
  if (weekDays.includes(entree)) {
    return true;
  }

  return false;
};

const isAnAnimal = (entree) => species.some(({ name }) => name === entree);

function getSchedule(scheduleTarget) {
  if (isAnAnimal(scheduleTarget)) {
    return getAnimalSchedule(scheduleTarget);
  }

  if (isAWeekDay(scheduleTarget)) {
    return { [scheduleTarget]: getDaySchedule(scheduleTarget) };
  }

  return getWeekSchedule();
}

module.exports = getSchedule;
