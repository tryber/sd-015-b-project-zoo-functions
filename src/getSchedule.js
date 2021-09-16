const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getDefaultSchedule(d) {
  return {
    officeHour: `Open from ${Object.values(hours[d])[0]}am until ${Object.values(hours[d])[1]}pm`,
    exhibition: species.filter((each) => each.availability.includes(d)).map(({ name }) => name),
  };
}

const defaultSchedule = {
  Tuesday: getDefaultSchedule('Tuesday'),
  Wednesday: getDefaultSchedule('Wednesday'),
  Thursday: getDefaultSchedule('Thursday'),
  Friday: getDefaultSchedule('Friday'),
  Saturday: getDefaultSchedule('Saturday'),
  Sunday: getDefaultSchedule('Sunday'),
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },

};

const mondaysIsClosed = {
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

function animalAvailability(animal) {
  return species.filter(({ name }) => name === animal).map(({ availability }) => availability)[0];
}
// console.log(animalAvailability('lions'));

const allAnimals = species.map(({ name }) => name);
// console.log(allAnimals);

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') return mondaysIsClosed;

  if (Object.prototype.hasOwnProperty.call(defaultSchedule, scheduleTarget) === true) {
    return { [scheduleTarget]: defaultSchedule[scheduleTarget] };
  }

  if (allAnimals.includes(scheduleTarget)) {
    return animalAvailability(scheduleTarget);
  }

  return defaultSchedule;
}

// console.log(getSchedule('Sunday'));
module.exports = getSchedule;
