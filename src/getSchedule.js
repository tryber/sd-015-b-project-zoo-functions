const data = require('../data/zoo_data');

function getExibationOfDay(parameterObj) {
  const schedule = parameterObj;
  Object.keys(schedule).forEach((actual) => {
    const arrayExibition = [];
    data.species.forEach((exhibitionday) => {
      const dayOfTheWeek = exhibitionday.availability.indexOf(actual);
      if (dayOfTheWeek >= 0) {
        arrayExibition.push(exhibitionday.name);
      }
    });
    schedule[actual].exhibition = arrayExibition;
    if (actual === 'Monday') {
      schedule[actual].exhibition = 'The zoo will be closed!';
    }
  });
  return schedule;
}

function getOfficeHour(parameterObj) {
  const schedule = parameterObj;
  Object.keys(parameterObj).forEach((d) => {
    schedule[d].officeHour = `Open from ${data.hours[d].open}am until ${data.hours[d].close}pm`;
    if (d === 'Monday') {
      schedule[d] = { officeHour: 'CLOSED' };
    }
  });
  return schedule;
}

function allSchedule() {
  let schedule = { Tuesday: {},
    Wednesday: {},
    Thursday: {},
    Friday: {},
    Saturday: {},
    Sunday: {},
    Monday: {} };

  schedule = getOfficeHour(schedule);
  schedule = getExibationOfDay(schedule);
  return schedule;
}

function getSchedule(scheduleTarget) {
  let schedule = {};
  const allAnimals = [];
  data.species.forEach((animal) => allAnimals.push(animal.name));
  const allWeekDays = [];
  Object.keys(data.hours).forEach((weekDay) => allWeekDays.push(weekDay));
  schedule = allSchedule();
  if (allWeekDays.indexOf(scheduleTarget) >= 0) {
    const schedule2 = {};
    schedule2[scheduleTarget] = schedule[scheduleTarget];
    schedule = schedule2;
  }
  if (allAnimals.indexOf(scheduleTarget) >= 0) {
    return data.species.find((animal) => animal.name === scheduleTarget).availability;
  }
  return schedule;
}

module.exports = getSchedule;
