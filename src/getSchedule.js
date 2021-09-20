const { species } = require('../data/zoo_data');

const data = require('../data/zoo_data');
// consultei o repositório do Paulo Flora e utilizei a função getHours() e a mesma lógica aplicada em sua função getAnimals()
// fonte :: https://github.com/tryber/sd-015-b-project-zoo-functions/blob/paulo-flora-zoo-functions/src/getSchedule.js
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

function getAnimals() {
  days.forEach((day) => {
    let foundAnimals = species.filter((animal) => animal.availability.includes(day));
    foundAnimals = foundAnimals.map((animal) => animal.name);
    if (foundAnimals.length === 0) {
      result[day].exhibition = 'The zoo will be closed!';
    } else {
      result[day].exhibition = foundAnimals;
    }
  });
}
const monday = {
  Monday:
   {
     exhibition: 'The zoo will be closed!',
     officeHour: 'CLOSED',
   },
};

function getSchedule(scheduleTarget) {
  getHours();
  getAnimals();
  if (scheduleTarget === 'Monday') return monday;
  if (!scheduleTarget) return result;
  if (days.includes(scheduleTarget)) {
    return { [scheduleTarget]: result[scheduleTarget] };
  }
  const animals = species.filter((animal) => animal.name);
  const animalNames = animals.map((animal) => animal.name);
  if (animalNames.includes(scheduleTarget)) {
    const foundAnimal = animals.find((animal) => animal.name === scheduleTarget);
    return foundAnimal.availability;
  }
  return result;
}

module.exports = getSchedule;
