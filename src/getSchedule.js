const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const week = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

function GetAllSchedule() {
  const allSchedule = {};
  week.forEach((day) => {
    if (day === 'Monday') {
      allSchedule[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      const dayHour = hours[day];
      const animals = species.filter((specie) => specie.availability.find((days) => days === day));
      const animalsAvaible = animals.map((specie) => specie.name);
      allSchedule[day] = {
        officeHour: `Open from ${dayHour.open}am until ${dayHour.close}pm`,
        exhibition: animalsAvaible,
      };
    }
  });
  return allSchedule;
}

function getDaySchedule(day) {
  const allSchedule = GetAllSchedule();
  const daySchedule = allSchedule[day];
  const result = {
    [day]: daySchedule,
  };
  return result;
}

function getAnimalSchedule(target) {
  const animal = species.find((specie) => specie.name === target);
  return animal.availability;
}

function getTypeOfTarget(target) {
  const animal = species.find((specie) => specie.name === target);
  const dayOfWeek = week.find((day) => day === target);

  if (animal !== undefined) return 'animal';
  if (dayOfWeek !== undefined) return 'day';
  return undefined;
}

function getSchedule(scheduleTarget) {
  const allSchedule = GetAllSchedule();
  if (scheduleTarget === undefined) return allSchedule;

  const type = getTypeOfTarget(scheduleTarget);

  if (type === undefined) return allSchedule;
  if (type === 'day') return getDaySchedule(scheduleTarget);
  if (type === 'animal') return getAnimalSchedule(scheduleTarget);
}

console.log(getSchedule('Monday'));

module.exports = getSchedule;
