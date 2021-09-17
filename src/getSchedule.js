const data = require('../data/zoo_data');

const { species } = data;

const { hours } = data;

function getDaysOfAnimals(animal) {
  return species.find((specie) => specie.name === animal).availability;
}

function getAnimalsByDay(day) {
  const animalsByDay = species.filter((specie) =>
    specie.availability.includes(day)).map((animal) => animal.name);

  return animalsByDay;
}

function getPreviousInfo() {
  const result = {};
  const days = [...new Set(Object.keys(hours).map((day) => day))];

  days.forEach((day) => {
    if (hours[day].open > 0) {
      result[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: getAnimalsByDay(day),
      };
    } else {
      result[day] = {
        officeHour: 'CLOSED', exhibition: 'The zoo will be closed!',
      };
    }
  });

  return result;
}

function getSchedule(scheduleTarget) {
  const result = getPreviousInfo();
  const obj = {};
  const specieNames = species.map((specie) => specie.name);
  const days = [...new Set(Object.keys(hours).map((day) => day))];

  if (scheduleTarget === 'Monday') return { Monday: result.Monday };

  if (specieNames.includes(scheduleTarget)) return getDaysOfAnimals(scheduleTarget);

  if (!days.includes(scheduleTarget)) return result;

  if (days.includes(scheduleTarget)) {
    obj[scheduleTarget] = result[scheduleTarget];
    return obj;
  }
}

module.exports = getSchedule;
