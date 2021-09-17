const data = require('../data/zoo_data');

const daysWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

function getOfficeHourByDay(dayWeek) {
  if (dayWeek === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  return { [dayWeek]: {
    officeHour: `Open from ${data.hours[dayWeek].open}am until ${data.hours[dayWeek].close}pm`,
    exhibition: data.species.filter((specie) => specie.availability.includes(dayWeek))
      .map((element) => element.name) },
  };
}

function agroupOfficeHourByDay(dayWeek) {
  return daysWeek.reduce((acc, obj) => {
    if (obj === 'Monday') {
      acc[obj] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
      return acc;
    }
    acc[obj] = {
      officeHour: `Open from ${data.hours[obj].open}am until ${data.hours[obj].close}pm`,
      exhibition: data.species.filter((specie) => specie.availability.includes(obj))
        .map((specie) => specie.name) };
    return acc;
  }, {});
}

function getSchedule(scheduleTarget) {
  if (daysWeek.includes(scheduleTarget)) {
    return getOfficeHourByDay(scheduleTarget);
  }

  if (scheduleTarget === undefined || !data.species.map((specie) => specie.name)
    .includes(scheduleTarget)) {
    return agroupOfficeHourByDay();
  }

  return data.species.find((specie) => specie.name === scheduleTarget).availability;
}

console.log(getSchedule());

module.exports = getSchedule;
