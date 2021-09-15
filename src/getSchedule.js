const data = require('../data/zoo_data');

function generalSchedule() {
  const daysObject = data.hours;
  const speciesArray = data.species;
  return Object.keys(daysObject).reduce((schedule, day) => {
    const newObject = schedule;
    const { open, close } = daysObject[day];
    const officeHour = `Open from ${open}am until ${close}pm`;
    let exhibition = speciesArray.filter((element) => element.availability.includes(day));
    exhibition = exhibition.map((element) => element.name);
    if (day === 'Monday') {
      newObject[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      newObject[day] = {
        officeHour,
        exhibition,
      };
    }
    return newObject;
  }, {});
}

function getScheduleByDay(scheduleTarget) {
  const scheduleArray = Object.entries(generalSchedule());
  let scheduleArrayFiltered = scheduleArray.filter((element) => element[0] === scheduleTarget);
  if (scheduleArrayFiltered.length === 0) {
    scheduleArrayFiltered = scheduleArray;
  }
  return scheduleArrayFiltered.reduce((acc, curr) => {
    const [key, value] = curr;
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
  }
  if (days.includes(scheduleTarget)) {
    return getScheduleByDay(scheduleTarget);
  }
  return generalSchedule();
}

module.exports = getSchedule;
