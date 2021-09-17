const data = require('../data/zoo_data');

function getScheduleName(name) {
  const animal = data.species.find((specie) => specie.name === name);
  return animal.availability;
}

const specieNames = data.species.map((specie) => specie.name);
const daysWeek = Object.keys(data.hours);

function getSchedule(dayOrName = null) {
  if (specieNames.includes(dayOrName)) { return getScheduleName(dayOrName); }
  const createobj = daysWeek.reduce((acc, curr) => {
    if (acc[curr] == null) { acc[curr] = {}; }
    acc[curr] = {
      officeHour: `Open from ${data.hours[curr].open}am until ${data.hours[curr].close}pm`,
      exhibition: data.species
        .filter((specie) => specie.availability.includes(curr))
        .map((a) => a.name),
    };
    return acc;
  }, {});
  createobj.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  if (daysWeek.includes(dayOrName)) {
    return { [dayOrName]: createobj[dayOrName] };
  }
  return createobj;
}

console.log(getSchedule('lions'));
module.exports = getSchedule;
