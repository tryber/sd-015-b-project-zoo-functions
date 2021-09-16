const data = require('../data/zoo_data');

// ref.: consulta: https://github.com/tryber/sd-015-b-project-zoo-functions/blob/amanda-fernandes-zoo-functions-project/src/getSchedule.js

const scheduleZoo = () => {
  const array = Object.entries(data.hours);
  const object = {};
  array.forEach((week) => {
    const { open, close } = week[1];
    Object.assign(object, { [week[0]]: {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: (data.species
        .filter(({ availability }) => availability.includes(week[0]))
        .map(({ name }) => name)),
    } });
  });

  object.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };

  return object;
};

const returnDays = (scheduleTarget) => ({ [scheduleTarget]: scheduleZoo()[scheduleTarget] });

const returnAvailability = (scheduleTarget) => data.species
  .find(({ name }) => scheduleTarget === name).availability;

function getSchedule(scheduleTarget) {
  const verifyDays = Object.keys(data.hours).includes(scheduleTarget);
  const verifyAnimal = data.species.map(({ name }) => name).includes(scheduleTarget);

  if (verifyDays) return returnDays(scheduleTarget);
  if (verifyAnimal) return returnAvailability(scheduleTarget);

  return scheduleZoo();
}

module.exports = getSchedule;
