const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getOfficeHourByDay = (day) => {
  const hoursObj = hours[day];
  const officerHours = `Open from ${hoursObj.open}am until ${hoursObj.close}pm`;
  return officerHours;
};
const getExhibitionbyDay = (day) => {
  const allAnimalsOfTheDay = species.filter((specie) => specie.availability.includes(day));
  const allAnimalsNamesOfTheDay = allAnimalsOfTheDay.map((animal) => animal.name);
  return allAnimalsNamesOfTheDay;
};

const getScheduleByDay = (day) => {
  const daySchedule = {
    officeHour: getOfficeHourByDay(day),
    exhibition: getExhibitionbyDay(day),
  };
  if (day === 'Monday') {
    daySchedule.officeHour = 'CLOSED';
    daySchedule.exhibition = 'The zoo will be closed!';
  }
  return daySchedule;
};

const getAllDaysSchedule = (week) => {
  const allDays = {};
  week.forEach((day) => { allDays[day] = getScheduleByDay(day); });
  return allDays;
};

const getDaysByAnimal = (name) => species.find((animal) => animal.name === name).availability;

function getSchedule(scheduleTarget) {
  // seu código aqui
  const week = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const allAnimals = species.map((animal) => animal.name);

  let schedule = {};

  if (week.includes(scheduleTarget)) {
    console.log('entrou');
    schedule[scheduleTarget] = getScheduleByDay(scheduleTarget);
  } else if (allAnimals.includes(scheduleTarget)) {
    schedule = getDaysByAnimal(scheduleTarget);
  } else {
    schedule = getAllDaysSchedule(week);
  }

  return schedule;
}

module.exports = getSchedule;
