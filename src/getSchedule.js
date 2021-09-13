const data = require('../data/zoo_data');

function generalSchedule() {
  const daysObject = data.hours;
  const speciesArray = data.species;
  return Object.keys(daysObject).reduce((schedule, day) => {
    const { open, close } = daysObject[day];
    const officeHour = `Open from ${open}am until ${close}pm`;
    let exhibition = speciesArray.filter((element) => element.availability.includes(day));
    exhibition = exhibition.map((element) => element.name);
    if (day === 'Monday') {
      schedule[day] = { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' };
    } else {
      schedule[day] = {
        officeHour,
        exhibition,
      };
    }
    return schedule;
  }, {});
}

function getScheduleByDay(scheduleTarget) {
  const scheduleArray = Object.entries(generalSchedule());
  const scheduleArrayFiltered = scheduleArray.filter((element) => element[0] === scheduleTarget);
  const scheduleArrayAdjusted = scheduleArrayFiltered.length !== 0 ? scheduleArrayFiltered : scheduleArray;
  return scheduleObject = scheduleArrayAdjusted.reduce((acc, curr) => {
    const [ key, value ] = curr;
    acc[key] = value;
    return acc;
  }, {});
}

function getScheduleByAnimal(scheduleTarget) {
  return data.species.find((element) => element.name === scheduleTarget).availability;
}

function getSchedule(scheduleTarget) {
  const animals = data.species.map((element) => element.name);
  const days = Object.keys(data.hours);
  if (animals.includes(scheduleTarget)) {
    return getScheduleByAnimal(scheduleTarget);
  } else if (days.includes(scheduleTarget)) {
    return getScheduleByDay(scheduleTarget);
  }
  return generalSchedule();
}

module.exports = getSchedule;
