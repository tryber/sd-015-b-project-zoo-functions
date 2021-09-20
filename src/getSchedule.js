const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const objectMain = {};

const getHour = (day) => {
  const { open, close } = hours[day];
  return `Open from ${open}am until ${close}pm`;
};
function getExhibition(day) {
  const filterDay = species.filter((element) => element.availability.includes(day));
  return filterDay.map((animals) => animals.name);
}
function creatMainObject() {
  const daysOfWeek = Object.keys(hours);
  daysOfWeek.forEach((days) => {
    const cronogram = {
      officeHour: getHour(days),
      exhibition: getExhibition(days),
    };
    if (days === 'Monday') {
      cronogram.officeHour = 'CLOSED';
      cronogram.exhibition = 'The zoo will be closed!';
    }
    objectMain[days] = cronogram;
  });
}
creatMainObject();

function getSchedule(scheduleTarget) {
  if (Object.keys(objectMain).includes(scheduleTarget)) {
    const arrayDay = Object.entries(objectMain).find(([element]) => element === scheduleTarget);
    const objectDay = {};
    const valueOfArrayDay = arrayDay[1];
    objectDay[arrayDay[0]] = valueOfArrayDay;
    return objectDay;
  } if (species.map((element) => element.name).includes(scheduleTarget)) {
    const findSpecie = species.find((animal) => animal.name === scheduleTarget);
    return findSpecie.availability;
  }
  return objectMain;
}

console.log((getSchedule('penguins')));
module.exports = getSchedule;
