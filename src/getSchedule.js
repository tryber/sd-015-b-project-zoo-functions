const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAllSchedule = () => {
  const allSchedule = {};
  Object.keys(hours).forEach((days) => {
    const allTimes = hours[days];
    if (days === 'Monday') {
      allSchedule[days] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      allSchedule[days] = {
        officeHour: `Open from ${allTimes.open}am until ${allTimes.close}pm`,
        exhibition: species
          .filter((animal) => animal.availability.includes(days))
          .map((element) => element.name),
      };
    }
  });
  return allSchedule;
};

const animalAndDay = (scheduleTarget, day, animals) => {
  if (animals) {
    return species.find((animal) => animal.name === scheduleTarget).availability;
  }
  if (day) {
    return { [scheduleTarget]: getAllSchedule() };
  }
};

function getSchedule(scheduleTarget) {
  const day = Object.keys(hours).includes(scheduleTarget);
  const animal = species.some((element) => element.name === scheduleTarget);
  if (animal || day) {
    return animalAndDay(scheduleTarget, day, animal);
  }
  return getAllSchedule();
}

getSchedule('Wednesday');

module.exports = getSchedule;
