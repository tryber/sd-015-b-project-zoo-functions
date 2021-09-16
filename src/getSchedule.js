const data = require('../data/zoo_data');

// const workDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

function paramIsAnAnimal(scheduleTarget) {
  const parameterIsAnAnimal = data.species.some((specie) => specie.name === scheduleTarget);
  const animalAvalable = data.species.find((specie) => specie.name === scheduleTarget).availability;
  if (parameterIsAnAnimal) return animalAvalable;
}
function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  if (paramIsAnAnimal(scheduleTarget)) return paramIsAnAnimal(scheduleTarget);
}
getSchedule('lions');

module.exports = getSchedule;
