const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function allSchedule() {
  const obj = {};
  daysOfWeek.forEach((day) => {
    const availability = species.filter((animal) => animal.availability.includes(day));
    if (day === 'Monday') {
      obj[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      obj[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: availability.map((element) => element.name),
      };
    }
  });
  return obj;
}

function daySchedule(scheduleTarget) {
  const availability = species.filter((animal) => animal.availability.includes(scheduleTarget));
  const obj = {};
  if (scheduleTarget === 'Monday') {
    obj[scheduleTarget] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
    return obj;
  }
  obj[scheduleTarget] = {
    officeHour: `Open from ${hours[scheduleTarget].open}am until ${hours[scheduleTarget].close}pm`,
    exhibition: availability.map((elem) => elem.name),
  };
  return obj;
}

function eachAnimalSchedule(scheduleTarget) {
  const checkSchedule = species.find((elem) => elem.name === scheduleTarget);
  return checkSchedule.availability;
}

function getSchedule(scheduleTarget) {
  const animalCheck = species.some((elem) => elem.name === scheduleTarget);
  const dayCheck = daysOfWeek.some((elem) => elem === scheduleTarget);
  if (scheduleTarget === undefined || (animalCheck === false && dayCheck === false)) {
    return allSchedule();
  }
  if (dayCheck) {
    return daySchedule(scheduleTarget);
  }
  return eachAnimalSchedule(scheduleTarget);
}

module.exports = getSchedule;
