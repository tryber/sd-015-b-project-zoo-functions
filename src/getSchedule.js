const data = require('../data/zoo_data');

const { species, hours } = data;
const arrayHours = Object.entries(hours);

function timesAvailable() {
  const obj = {};
  arrayHours.forEach((day) => {
    const { open, close } = day[1];
    Object.assign(obj, {
      [day[0]]:
      {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: species
          .filter(({ availability }) => availability.includes(day[0]))
          .map(({ name }) => name),
      },
    });
  });
  obj.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return obj;
}
function returnDays(scheduleTarget) {
  return { [scheduleTarget]: timesAvailable()[scheduleTarget] };
}

function searchAnimal(animal) {
  return species.find((specie) => specie.name === animal).availability;
}

function getSchedule(scheduleTarget) {
  const returnDay = (Object.keys(timesAvailable()).includes(scheduleTarget));
  const animalNow = species.map(({ name }) => name).includes(scheduleTarget);
  if (animalNow) return searchAnimal(scheduleTarget);
  if (returnDay) return returnDays(scheduleTarget);
  return timesAvailable();
}

module.exports = getSchedule;
