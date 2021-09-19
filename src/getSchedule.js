// const { hours, species } = require('../data/zoo_data');
const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const weeklyCalendar = () => {
  const acumulador = {};
  const array = Object.entries(hours);
  array.forEach((elemento) => {
    const { open, close } = elemento[1];
    // console.log(elemento);
    Object.assign(acumulador, { [elemento[0]]: {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: (species.filter(({ availability }) =>
        availability.includes(elemento[0])).map(({ name }) => name)),
    } });
    // console.log(acumulador);
  });
  acumulador.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  // console.log(acumulador);
  return acumulador;
};

const days = (scheduleTarget) =>
  ({ [scheduleTarget]: weeklyCalendar()[scheduleTarget] });

const availabilitys = (scheduleTarget) =>
  species.find(({ name }) => scheduleTarget === name).availability;

function getSchedule(scheduleTarget) {
  const verifyDays = Object.keys(hours).includes(scheduleTarget);
  const verifyAnimal = species.map(({ name }) => name).includes(scheduleTarget);

  if (verifyDays) {
    return days(scheduleTarget);
  } if (verifyAnimal) {
    return availabilitys(scheduleTarget);
  } return weeklyCalendar();
}

// console.log(getSchedule());
// getSchedule();
// console.log();

module.exports = getSchedule;
