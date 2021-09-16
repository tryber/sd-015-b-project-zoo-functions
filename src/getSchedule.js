const data = require('../data/zoo_data');

const listShedule = {
  Tuesday: {},
  Wednesday: {},
  Thursday: {},
  Friday: {},
  Saturday: {},
  Sunday: {},
  Monday: {},
};

const weekDays = Object.keys(listShedule);

function getOfficeHour(weekDay) {
  let result = 'CLOSED';
  const validation = data.hours[weekDay].open && data.hours[weekDay].close;
  if (validation) {
    result = `Open from ${data.hours[weekDay].open}am until ${data.hours[weekDay].close}pm`;
  }
  return result;
}

function getValidAnswerShedule(answer) {
  let result = answer;
  if (result.length === 0) {
    result = 'The zoo will be closed!';
  }
  return result;
}

const getFullShedule = (weekDay, func) =>
  func(data.species.filter((specie) =>
    specie.availability.some((value) =>
      value === weekDay)).map((specie) => specie.name));

function getDefaultShedule() {
  for (let index = 0; index < weekDays.length; index += 1) {
    listShedule[weekDays[index]].officeHour = getOfficeHour(weekDays[index]);
    listShedule[weekDays[index]].exhibition = getFullShedule(weekDays[index],
      getValidAnswerShedule);
  }
  return listShedule;
}

const getDaysBySpecie = (specieName) =>
  (data.species.filter((specie) =>
    specie.name === specieName).map((specie) =>
    specie.availability))[0];

const isDayOfWeek = (weekDay) => {
  let result = false;
  if (weekDays.some((day) => day === weekDay)) {
    result = weekDay;
  }
  return result;
};

const isSpecie = (specieName) => {
  let result = false;
  if (data.species.some((specie) => specie.name === specieName)) {
    result = specieName;
  }
  return result;
};

function getResultSpecieOrDays(specieName, dayOfWeek) {
  let result;
  if (specieName) {
    result = getDaysBySpecie(specieName);
  } else {
    result = {
      [dayOfWeek]: {
        'officeHour': getOfficeHour(dayOfWeek),
        'exhibition': getFullShedule(dayOfWeek, getValidAnswerShedule),
      },
    };
  }
  return result;
}

function getSheduleWithParameters(scheduleTarget) {
  let result;
  const specieName = isSpecie(scheduleTarget);
  const dayOfWeek = isDayOfWeek(scheduleTarget);

  if (!specieName && !dayOfWeek) {
    result = getDefaultShedule();
  } else {
    result = getResultSpecieOrDays(specieName, dayOfWeek);
  }
  return result;
}

function getSchedule(scheduleTarget) {
  let result = {};
  if (scheduleTarget === undefined) {
    result = getDefaultShedule();
  } else {
    result = getSheduleWithParameters(scheduleTarget);
  }
  return result;
}

module.exports = getSchedule;
