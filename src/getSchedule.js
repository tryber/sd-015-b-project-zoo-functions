const data = require('../data/zoo_data');

// consultei o repositório do Arthur Viegas, para ver a lógica usada nas funções getHours e getAnimals,
// pois estava com muita dificuldade
// https://github.com/tryber/sd-015-b-project-zoo-functions/pull/123/commits/e12961ce0d9437284aeb99c49db998f94a42f6b1

const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const { species } = data;
const result = {};
const monday = {
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

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
    let animalDays = species.filter((specie) => specie.availability.includes(day));
    animalDays = animalDays.map((specie) => specie.name);
    if (animalDays.length === 0) {
      result[day].exhibition = 'The zoo will be closed!';
    } else {
      result[day].exhibition = animalDays;
    }
  });
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (scheduleTarget === 'Monday') {
    return monday;
  }
  getHours();
  getAnimals();
  if (!scheduleTarget) { return result; }
  if (days.includes(scheduleTarget)) {
    return { [scheduleTarget]: result[scheduleTarget] };
  }
  const animals = species.filter((animal) => animal.name);
  const allAnimals = species.map((specie) => specie.name);
  if (allAnimals.includes(scheduleTarget)) {
    const targetAnimal = animals.find((specie) => specie.name === scheduleTarget);
    return targetAnimal.availability;
  }
  return result;
}

module.exports = getSchedule;
