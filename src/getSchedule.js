const data = require('../data/zoo_data');

const dia = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

const resultado = {};

function getHours() {
  dia.forEach((day) => {
    const { open } = data.hours[day];
    const { close } = data.hours[day];
    resultado[day] = {};
    if (open === 0 || close === 0) {
      resultado[day].officeHour = 'CLOSED';
    } else {
      resultado[day].officeHour = `Open from ${open}am until ${close}pm`;
    }
  });
  return resultado;
}

function getExhibition() {
  dia.forEach((day) => {
    let currentAnimals = data.species.filter((animal) => animal.availability.includes(day));
    currentAnimals = currentAnimals.map((animal) => animal.name);
    if (currentAnimals.length === 0) {
      resultado[day].exhibition = 'The zoo will be closed!';
    } else {
      resultado[day].exhibition = currentAnimals;
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
    return { Monday: resultado[scheduleTarget] };
  }
  if (dia.includes(scheduleTarget)) {
    return { [scheduleTarget]: resultado[scheduleTarget] };
  }
  if (getScheduleFromAnimal(scheduleTarget)) {
    return getScheduleFromAnimal(scheduleTarget);
  }
  return resultado;
}

module.exports = getSchedule;
