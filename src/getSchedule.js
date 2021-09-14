const data = require('../data/zoo_data');

const closedMessage = 'The zoo will be closed!';

function scheduleAll(days) {
  const schedule = days.reduce((obj, day) => {
    const sch = obj;
    let exhibition = data.species.filter(({ availability }) =>
      availability.includes(day)).map((specie) => specie.name);
    if (exhibition.length === 0) exhibition = closedMessage;

    const hours = data.hours[day];
    let officeHour = `Open from ${hours.open}am until ${hours.close}pm`;
    if (hours.open === 0 && hours.close === 0) officeHour = 'CLOSED';

    sch[day] = { exhibition, officeHour };
    return sch;
  }, {});
  return schedule;
}

function scheduleDay(day) {
  let exhibition = data.species.filter((specie) => specie.availability.includes(day))
    .map((specie) => specie.name);
  if (exhibition.length === 0) exhibition = closedMessage;

  const hours = data.hours[day];
  let officeHour = `Open from ${hours.open}am until ${hours.close}pm`;
  if (hours.open === 0 && hours.close === 0) officeHour = 'CLOSED';

  return { [day]: { exhibition, officeHour } };
}

function scheduleSpecie(specie) {
  let exhibition = data.species.find((elem) => elem.name === specie).availability;
  if (exhibition.length === 0) exhibition = closedMessage;
  return exhibition;
}

function getSchedule(scheduleTarget) {
  const schedule = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const species = data.species.map((specie) => specie.name);
  if (schedule.includes(scheduleTarget)) return scheduleDay(scheduleTarget);
  if (species.includes(scheduleTarget)) return scheduleSpecie(scheduleTarget);
  return scheduleAll(schedule);
}

module.exports = getSchedule;
console.log(getSchedule());
