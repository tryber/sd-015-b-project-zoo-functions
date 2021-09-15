const data = require('../data/zoo_data');

const { species, hours } = data;

const animalsName = species.map((animal) => animal.name);

const daysOfWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

// Busca  animal pelo dia
const getAnimalsByDay = (day) => {
  if (day === 'Monday') return { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  const animals = species.filter((animal) => animal.availability.some((days) => days === day));
  const hour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
  return { officeHour: hour, exhibition: animals.map((animal) => animal.name) };
};

// Agenda padrão
const patternSchedule = {
  Tuesday: getAnimalsByDay('Tuesday'),
  Wednesday: getAnimalsByDay('Wednesday'),
  Thursday: getAnimalsByDay('Thursday'),
  Friday: getAnimalsByDay('Friday'),
  Saturday: getAnimalsByDay('Saturday'),
  Sunday: getAnimalsByDay('Sunday'),
  Monday: getAnimalsByDay('Monday'),

};

function getSchedule(scheduleTarget) {
  // parametro vazio
  if (!scheduleTarget) {
    return patternSchedule;
  }
  // recebe como parametro  só nome do animal
  if (animalsName.some((name) => scheduleTarget === name)) {
    const animalAvaibility = species.find((animal) => animal.name === scheduleTarget).availability;
    return animalAvaibility;
  }
  // recebe como parametro algo que não seja igual a dia ou nome de animal
  if (!animalsName.some((name) => scheduleTarget === name)
   && !daysOfWeek.some((day) => scheduleTarget === day)) {
    return patternSchedule;
  }
  // recebe parametro dia
  return { [scheduleTarget]: getAnimalsByDay(scheduleTarget) };
}

module.exports = getSchedule;
