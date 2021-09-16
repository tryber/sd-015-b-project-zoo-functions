const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const days = Object.keys(hours);
const valueHours = Object.values(hours);
const SpeciesList = Object.values(species);
const SpeciesListNames = SpeciesList.map((specie) => specie.name);

function officeHourFunc() {
  return valueHours.map((hour) => {
    if (hour.open === 0 && hour.close === 0) {
      return 'CLOSED';
    }
    return `Open from ${hour.open}am until ${hour.close}pm`;
  });
}

function exhibitionFunc() {
  let exhibitionPush = [];
  const exhibition = [];
  days.forEach((day) => {
    SpeciesList.filter((specie) => {
      if (specie.availability.includes(day)) {
        exhibitionPush.push(specie.name);
      }
      return exhibition;
    });
    if (day === 'Monday') {
      exhibition.push('The zoo will be closed!');
    }
    exhibition.push(exhibitionPush);
    exhibitionPush = [];
  });
  return exhibition;
}

function ScheduleComplete() {
  const Schedule = {};
  days.forEach((day, index) => {
    Schedule[day] = {
      officeHour: officeHourFunc()[index],
      exhibition: exhibitionFunc()[index],
    };
  });
  return Schedule;
}

function getSchedule(Targ) {
  // seu código aqui
  if (days.includes(Targ)) {
    const ScheduleDay = {};
    const teste = Object.entries(ScheduleComplete()).filter((day) => day.includes(Targ))[0][1];
    ScheduleDay[Targ] = teste;
    return ScheduleDay;
  }
  if (SpeciesListNames.includes(Targ)) {
    return Object.values(species).find((specie) => specie.name === Targ).availability;
  }
  return ScheduleComplete();
}

module.exports = getSchedule;
