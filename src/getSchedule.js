const data = require('../data/zoo_data');

const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

const noParameters = () => {
  const padrao = days.reduce((acc, day) => {
    const { open, close } = data.hours[day];
    const animalsInThisDay = data.species.filter(({ availability }) => availability.includes(day));
    let officeHour = 'CLOSED';
    let exhibition = 'The zoo will be closed!';

    if (day !== 'Monday') {
      officeHour = `Open from ${open}am until ${close}pm`;
      exhibition = animalsInThisDay.map(({ name }) => name);
    }
    acc[day] = { officeHour, exhibition };

    return acc;
  }, {});

  return padrao;
};
const isAnimal = (param) => data.species.some(({ name }) => name === param);
const isADay = (param) => days.some((day) => day === param);

function getSchedule(scheduleTarget) {
  // seu código aqui
  const cronograma = noParameters();
  const validDay = isADay(scheduleTarget);
  const validAnimal = isAnimal(scheduleTarget);
  if (!scheduleTarget) return cronograma;

  if (validDay) {
    const dayInfo = {};
    dayInfo[scheduleTarget] = cronograma[scheduleTarget];
    return dayInfo;
  }

  if (validAnimal) {
    return data.species.find(({ name }) => name === scheduleTarget).availability;
  }

  return cronograma;
}

module.exports = getSchedule;
