const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function daysNHours() {
  const obj = {};
  const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  days.forEach((day) => {
    const animalAv = species.filter((animal) => animal.availability.includes(day));
    const names = animalAv.map((animalNames) => animalNames.name);
    obj[day] = { officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: names };
    if (day === 'Monday') {
      obj[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    }
  });
  return obj;
}

function verifyParam(scheduleTarget) {
  const obj = daysNHours();
  const animalName = species.find((animal) => animal.name === scheduleTarget);
  const objKey = obj[scheduleTarget];
  if (objKey !== undefined) {
    return { [scheduleTarget]: objKey };
  }
  if (animalName !== undefined) {
    return animalName.availability;
  }
  if ((objKey === undefined) && (animalName === undefined)) {
    return obj;
  }
}

function monday() {
  return {
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
}
function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return daysNHours();
  }
  if (scheduleTarget === 'Monday') {
    return monday();
  }
  return verifyParam(scheduleTarget);
}
console.log(getSchedule('Tuesday'));
module.exports = getSchedule;
