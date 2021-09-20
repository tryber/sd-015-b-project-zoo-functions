const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const obtAllSchedule = {};
const arrHours = Object.entries(hours);
// console.log(arrHours);
const daysWeek = arrHours.map((day) => day[0]);
// console.log(daysWeek);
const keyDaysWeek = arrHours.map((day) => day[0])
  .map((dayWeek) => arrHours.find((hour) => hour.includes(dayWeek))
    .map((dayOpenClose) => dayOpenClose)[0]);
// console.log(keyDaysWeek);

const valueOpenClose = arrHours.map((day) => day[0])
  .map((dayWeek) => arrHours.find((hour) => hour.includes(dayWeek))
    .map((openClose) => `Open from ${openClose.open}am until ${openClose.close}pm`)[1]);
// console.log(valueOpenClose);

const valueExhibition = arrHours.map((day) => day[0])
  .map((dayWeek) => species.filter((specie) => specie.availability.includes(dayWeek))
    .map((specieDay) => specieDay.name));
// console.log(valueExhibition);

const getObjtAllSchedule = () => {
  for (let i = 0; i < daysWeek.length; i += 1) {
    if (daysWeek[i] !== 'Monday') {
      obtAllSchedule[keyDaysWeek[i]] = {};
      obtAllSchedule[keyDaysWeek[i]].officeHour = valueOpenClose[i];
      obtAllSchedule[keyDaysWeek[i]].exhibition = valueExhibition[i];
    } else {
      obtAllSchedule.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    }
  }
  return obtAllSchedule;
};

const ifAnimals = (nameAnimal) => species.some((specie) => specie.name === nameAnimal);
// console.log(ifAnimals('lions'));
const getDayAnimal = (nameAnimal) => species
  .find((specie) => specie.name === nameAnimal).availability;
// console.log(getDayAnimal('lions'));

const dayMonday = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };

const ifOneDay = (oneDay) => arrHours.some((dayWeek) => dayWeek[0].includes(oneDay));
// console.log(ifOneDay('Tuday'));
const getForOneDay = (oneDay) => {
  if (oneDay === 'Monday') {
    return dayMonday;
  }
  const dataAnimalAndSchedule = getObjtAllSchedule();
  const objectDay = {};
  objectDay[oneDay] = dataAnimalAndSchedule[oneDay];
  return objectDay;
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    const allSchedule = getObjtAllSchedule();
    return allSchedule;
  } if (ifOneDay(scheduleTarget) === true) {
    return getForOneDay(scheduleTarget);
  } if (ifAnimals(scheduleTarget) === true) {
    return getDayAnimal(scheduleTarget);
  } const allSchedule = getObjtAllSchedule();
  return allSchedule;
}

module.exports = getSchedule;
