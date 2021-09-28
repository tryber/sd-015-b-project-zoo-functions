const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const animals = ['lions', 'tigers', 'bears', 'penguins', 'otters',
  'frogs', 'snakes', 'elephants', 'giraffes'];
const fullSchedule = {};

function createFullSchedule() {
  days.forEach((day) => {
    fullSchedule[`${day}`] = {
      officeHour: `Open from ${hours[`${day}`].open}am until ${hours[`${day}`].close}pm`,
      exhibition: species.filter((animal) => animal.availability
        .some((showDay) => showDay === day)).map((showAnimal) => showAnimal.name),
    };
  });
  fullSchedule.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
}

createFullSchedule();

const obj = Object.entries(fullSchedule);

function getScheduleByDay(scheduleDay) {
  const newObj = {};
  const filtered = obj.filter((dayObj) => dayObj[0] === scheduleDay);
  const dayInfo = filtered[0][1];
  newObj[`${filtered[0][0]}`] = dayInfo;
  return newObj;
}

function getScheduleByAnimal(scheduleAnimal) {
  return species.find((animal) => animal.name === scheduleAnimal).availability;
}

function getSchedule(scheduleTarget) {
  if (days.some((day) => day === scheduleTarget)) return getScheduleByDay(scheduleTarget);
  if (animals
    .some((animal) => animal === scheduleTarget)) return getScheduleByAnimal(scheduleTarget);
  return fullSchedule;
}

module.exports = getSchedule;
