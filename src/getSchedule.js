const data = require('../data/zoo_data');

const animalsNames = data.species.map((specie) => specie.name);
const animals = [...data.species];
const days = Object.keys(data.hours);

const getAnimalSchedule = (animal) => animals.find((specie) => specie.name === animal).availability;

const getDaySchedule = (day) => {
  const daySchedule = {};
  if (day === 'Monday') {
    daySchedule[day] = {
      officeHour: 'CLOSED', exhibition: 'The zoo will be closed!',
    };
  } else {
    daySchedule[day] = {
      officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      exhibition: animals.filter((animal) => animal.availability.includes(day))
        .map((animal) => animal.name),
    };
  }
  return daySchedule;
};

const getWeekSchedule = () => {
  const schedule = {};
  days.forEach((day) => {
    if (day === 'Monday') {
      schedule.Monday = {
        officeHour: 'CLOSED', exhibition: 'The zoo will be closed!',
      };
    } else {
      schedule[day] = {
        officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
        exhibition: animals.filter((animal) => animal.availability.includes(day))
          .map((animal) => animal.name),
      };
    }
  });
  return schedule;
};

function getSchedule(scheduleTarget) {
  if (animalsNames.includes(scheduleTarget)) {
    return getAnimalSchedule(scheduleTarget);
  }
  if (days.includes(scheduleTarget)) {
    return getDaySchedule(scheduleTarget);
  }
  return getWeekSchedule();
}
module.exports = getSchedule;
console.log(getSchedule('lions'));
