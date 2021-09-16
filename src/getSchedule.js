const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimals(day) {
  const listOfAnimals = [];
  const animals = species.filter((element) => element.availability.includes(day));
  animals.map((element) => listOfAnimals.push(element.name));
  return listOfAnimals;
}

function getScheduleOfDay(day) {
  const dia = Object.entries(hours);
  const agenda = dia.find((element) => element[0] === day);
  if (day === 'Monday') {
    return {
      [day]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  return {
    [day]: {
      officeHour: `Open from ${agenda[1].open}am until ${agenda[1].close}pm`,
      exhibition: getAnimals(day),
    },
  };
}

function getScheduleOfAnimal(animal) {
  const specie = species.find((element) => element.name === animal);
  const listOfDays = specie.availability;
  return listOfDays;
}

function getCompleteSchedule(days) {
  const object = {};
  for (let index = 0; index < days.length; index += 1) {
    const schedule = Object.values(getScheduleOfDay(days[index]));
    const [first] = schedule;
    object[days[index]] = first;
  }
  return object;
}

function getSchedule(scheduleTarget) {
  const days = Object.keys(hours);
  const animals = species.map((element) => element.name);
  if (days.includes(scheduleTarget)) return getScheduleOfDay(scheduleTarget);
  if (animals.includes(scheduleTarget)) return getScheduleOfAnimal(scheduleTarget);
  return getCompleteSchedule(days);
}

module.exports = getSchedule;
