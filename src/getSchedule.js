const data = require('../data/zoo_data');
// const getSpeciesByIds = require('./getSpeciesByIds');

const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

const result = {};

function getHours() {
  days.forEach((day) => {
    const { open } = data.hours[day];
    const { close } = data.hours[day];
    result[day] = {};
    if (open === 0 || close === 0) {
      result[day].officeHour = 'CLOSED';
    } else {
      result[day].officeHour = `Open from ${open}am until ${close}pm`;
    }
  });
  return result;
}

function getExhibition() {
  days.forEach((day) => {
    let currentAnimals = data.species.filter((animal) => animal.availability.includes(day));
    currentAnimals = currentAnimals.map((animal) => animal.name);
    if (currentAnimals.length === 0) {
      result[day].exhibition = 'The zoo will be closed!';
    } else {
      result[day].exhibition = currentAnimals;
    }
  });
}

function getScheduleFromAnimal(scheduleTarget) {
  if (!scheduleTarget) {
    return false;
  }
  const animals = data.species.map((animal) => animal.name);
  const animalExhibition = data.species.find((animal) => animal.name === scheduleTarget);
  if (animals.includes(scheduleTarget)) {
    return animalExhibition.availability;
  }
}

function getSchedule(scheduleTarget) {
  getHours();
  getExhibition();
  if (scheduleTarget === 'Monday') {
    return { Monday: result[scheduleTarget] };
  }
  if (days.includes(scheduleTarget)) {
    return { [scheduleTarget]: result[scheduleTarget] };
  }
  if (getScheduleFromAnimal(scheduleTarget)) {
    return getScheduleFromAnimal(scheduleTarget);
  }
  return result;
}

module.exports = getSchedule;
