const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const openingHours = {};
const arrHours = Object.entries(hours);
// console.log(arrHoursForDays);
const valueAndKeyDays = (days) => arrHours.find((hour) => hour.includes(days))
  .map((openClose) => openClose)[0];
console.log(valueAndKeyDays('Tuesday'));
const valueOpenAndClose = (days) => arrHours.find((hour) => hour.includes(days))
  .map((openClose) => `Open from ${openClose.open}am until ${openClose.close}pm`)[1];
console.log(valueOpenAndClose('Tuesday'));
const valueExhibition = (days) => species.filter((specie) => specie.availability.includes(days))
  .map((specieDay) => specieDay.name);
console.log(valueExhibition('Tuesday'));

const horariosFuncionamento = () => {
  arrHours.map((day) => {

  });
};

const dayMonday = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };

const ifAnimals = (nameAnimal) => species.some((specie) => specie.name === nameAnimal);

const getDayAnimal = (nameAnimal) => {
  const daysWeek = species.find((specie) => specie.name === nameAnimal).availability;
  return Object.values(daysWeek);
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return openingHours;
  } if (scheduleTarget === 'Monday') {
    return dayMonday;
  } if (ifAnimals(scheduleTarget) === true) {
    return getDayAnimal(scheduleTarget);
  }
}
module.exports = getSchedule;
// console.log(getSchedule('lions'));
