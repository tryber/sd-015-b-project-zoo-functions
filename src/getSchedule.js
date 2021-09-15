const data = require('../data/zoo_data');

const { hours, species } = require('../data/zoo_data');

const animalsNames = species.map((specie) => specie.name);
const animals = [...species];
const days = Object.keys(hours);

const animalSchedule = (animal) => animals.find((specie) => specie.name === animal).availability;

const daySchedule = (day) => {
  const scheduleDay = {};
  if (day === 'Monday') {
    scheduleDay[day] = {
      officeHour: 'CLOSED', exhibition: 'The zoo will be closed!',
    };
  } else {
    scheduleDay[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: animals.filter((animal) => animal.availability.includes(day))
        .map((animal) => animal.name),
    };
  }
  return scheduleDay;
};

const weekSchedule = () => {
  const schedule = {};
  days.forEach((day) => {
    if (day === 'Monday') {
      schedule.Monday = {
        officeHour: 'CLOSED', exhibition: 'The zoo will be closed!',
      };
    } else {
      schedule[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: animals.filter((animal) => animal.availability.includes(day))
          .map((animal) => animal.name),
      };
    }
  });
  return schedule;
};

function getSchedule(scheduleTarget) {
  if (animalsNames.includes(scheduleTarget)) {
    return animalSchedule(scheduleTarget);
  }
  if (days.includes(scheduleTarget)) {
    return daySchedule(scheduleTarget);
  }
  return weekSchedule();
}

module.exports = getSchedule;
