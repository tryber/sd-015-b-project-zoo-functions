const data = require('../data/zoo_data');

const infoHours = Object.entries(hours);

// for (let day in hours) {
//   console.log(`${day} = ${hours[day]}`)
// }

function withoutParameters() {
function zooSchedule() {
  const object = {};
  infoHours.forEach((day) => {
    const { open, close } = day[1];
  function withoutParameters() {
  object.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return object;
}
const getDays = (scheduleTarget) => ({ [scheduleTarget]: zooSchedule()[scheduleTarget] });

function getAnimals(scheduleTarget) {
  return species.find((specie) => specie.name === scheduleTarget).availability;
}

function getSchedule(scheduleTarget, animal, day) {
  if (!scheduleTarget) return withoutParameters();
  if (!animal && !day) return withoutParameters();
function getSchedule(scheduleTarget) {
  const checkDays = Object.keys(zooSchedule()).includes(scheduleTarget);
  const checkAnimals = species.map((specie) => specie.name).includes(scheduleTarget);
  if (checkDays) return getDays(scheduleTarget);
  if (checkAnimals) return getAnimals(scheduleTarget);
  return zooSchedule();
}

module.exports = getSchedule;