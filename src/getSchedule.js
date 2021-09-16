const { species } = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

function exhibition(day) {
  return species.filter((_species) => _species.availability.includes(day)).map(({ name }) => name);
} // função que a Danielen e o Leandro me ajudaram a elaborar
function fullSchedule() {
  const schedule = {};
  const days = Object.keys(hours); // array com os dias da semana
  days.forEach((day) => {
    schedule[day] = {};
    schedule[day].officeHour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
    schedule[day].exhibition = exhibition(day);
    if (day === 'Monday') {
      schedule[day].officeHour = 'CLOSED';
      schedule[day].exhibition = 'The zoo will be closed!';
    }
  });
  return schedule;
}
// titio Leandro e titio Gabriel Alves que salvaram nessa porra
function someDay(day) {
  const full = fullSchedule();
  const outroDay = {};
  outroDay[day] = full[day];
  return outroDay;
}

function someAnimal(animal) {
  return species.find((_species) => _species.name === animal).availability;
}

function getSchedule(scheduleTarget) {
  if (Object.keys(hours).includes(scheduleTarget)) { return someDay(scheduleTarget); }
  if (species.map((_species) =>
    _species.name).includes(scheduleTarget)) { return someAnimal(scheduleTarget); }
  return fullSchedule();
}

module.exports = getSchedule;
