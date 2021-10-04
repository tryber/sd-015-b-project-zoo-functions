const data = require('../data/zoo_data');

function getSchedule(p) {
  const specie = data.species.find((animal) => animal.name === p);
  if (specie !== undefined) {
    return specie.availability;
  }
  const schedule = {};
  Object.keys(data.hours).forEach((day) => {
    const { open, close } = data.hours[day];
    schedule[day] = { officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: data.species.filter((a) => a.availability.includes(day)).map((b) => b.name),
    };
    if (open === 0 && close === 0) {
      schedule[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    }
  });
  if (schedule[p]) {
    return { [p]: schedule[p] };
  }
  return schedule;
}

getSchedule();
module.exports = getSchedule;
