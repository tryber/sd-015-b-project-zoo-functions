const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
let animals = [];
const schedule = {};

function createSchedule() {
  days.forEach((day) => {
  const { open, close } = hours[day];
  schedule[day] = {};
  const getExhibitionAnimals = data.species.filter((specie) => specie.availability.includes(day)); 
  const getAnimalsNames = getExhibitionAnimals.map((animal) => animal.name);
  if (open === 0 || close === 0) {
    schedule[day].officeHour = 'CLOSED';
  } else {
    schedule[day].officeHour = `Open from ${open}am until ${close}pm`;
  }
  schedule[day].exhibition = getAnimalsNames;
  if (day === 'Monday') {
    schedule[day].exhibition = 'The zoo will be closed!';
  }
  });
  return schedule;
}

function getScheduleForAnimals(scheduleTarget) {
  if (!scheduleTarget) return false;

  const verifyAnimal = species.find((specie) => specie.name === scheduleTarget);
  const animalSchedule = verifyAnimal.availability;

  return animalSchedule;
}

function getAnimals() {
  animals = species.map((specie) => specie.name);
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  createSchedule();
  getAnimals();
  if (days.includes(scheduleTarget)) {
    return { [scheduleTarget]: schedule[scheduleTarget] };
  } 
  if (animals.includes(scheduleTarget)) {
    return getScheduleForAnimals(scheduleTarget);
  }

  return schedule;
}

console.log(getSchedule('lions'));
module.exports = getSchedule;
