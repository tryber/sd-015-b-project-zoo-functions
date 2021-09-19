const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const daysWeek = Object.keys(hours);
const Hours = Object.values(hours);
const List = Object.values(species);
const ListNames = List.map((specie) => specie.name);

// Busca horario de abertura e horario de fechamento
function officeHourFunc() {
  return Hours.map((element) => {
    if (element.open === 0 && element.close === 0) {
      return 'CLOSED';
    }
    return `Open from ${element.open}am until ${element.close}pm`;
  });
}

function exhibitionFunc() {
  let exhibitionPush = [];
  const exhibition = [];
  daysWeek.forEach((day) => {
    List.filter((specie) => {
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
console.log(exhibitionFunc());
function ScheduleComplete() {
  const Schedule = {};
  daysWeek.forEach((day, index) => {
    Schedule[day] = {
      officeHour: officeHourFunc()[index],
      exhibition: exhibitionFunc()[index],
    };
  });
  return Schedule;
}
// Consultei o repositório do Lucas Peres para resolver essa parte.
// * link: https://github.com/tryber/sd-015-b-project-zoo-functions/pull/117/commits/35b04ae8048f65020a981c14a0d1331707fac826

function getSchedule(Targ) {
  if (daysWeek.includes(Targ)) {
    const ScheduleDay = {};
    const test = Object.entries(ScheduleComplete()).filter((day) => day.includes(Targ))[0][1];
    ScheduleDay[Targ] = test;
    return ScheduleDay;
  }
  if (ListNames.includes(Targ)) {
    return Object.values(species).find((specie) => specie.name === Targ).availability;
  }
  return ScheduleComplete();
}

module.exports = getSchedule;
console.log(getSchedule());
