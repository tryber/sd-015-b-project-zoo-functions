const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

// fonte https://github.com/tryber/sd-015-b-project-zoo-functions/blob/83f30ebe0a9cd53e65e07d542146062fd8016cd0/src/getSchedule.js
function getExhibitionArray(day) {
  const exhibitionArray = [];
  species.forEach(({ name, availability }) => {
    if (availability.includes(day)) exhibitionArray.push(name);
  });
  return !exhibitionArray[0] ? 'The zoo will be closed!' : exhibitionArray;
}

function getAllSchedule() {
  const days = Object.entries(hours);
  const schedules = {};
  days.forEach(([day, { open, close }]) => {
    schedules[day] = {};
    schedules[day].officeHour = `Open from ${open}am until ${close}pm`;
    if (open === 0 && close === 0) {
      schedules[day].officeHour = 'CLOSED';
    }
    schedules[day].exhibition = getExhibitionArray(day);
  });
  return schedules;
}

function getDaySchedule(scheduleTarget) {
  const daysSchedule = getAllSchedule();
  const day = {};
  day[scheduleTarget] = daysSchedule[scheduleTarget];
  return day;
}

function getAimalExhibitionDays(animal) {
  let animalExhibitionDays = [];
  species.forEach(({ name, availability }) => {
    if (name === animal) animalExhibitionDays = availability;
  });
  return animalExhibitionDays;
}

function getAnimalsArray() {
  const animalsArr = [];
  species.forEach(({ name }) => {
    animalsArr.push(name);
  });
  return animalsArr;
}
// getAllSchedule();
function getSchedule(scheduleTarget) {
  const days = Object.keys(hours);
  if (!scheduleTarget) return getAllSchedule();
  if (days.includes(scheduleTarget)) return getDaySchedule(scheduleTarget);
  if (getAnimalsArray().includes(scheduleTarget)) return getAimalExhibitionDays(scheduleTarget);
  return getAllSchedule();
}

module.exports = getSchedule;
