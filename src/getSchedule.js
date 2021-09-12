const { hours, species } = require('../data/zoo_data');

const scheduleEntries = Object.entries(hours);

function noArgs() {
  const output = {};
  scheduleEntries.forEach((day) => {
    const { open, close } = day[1];
    const tempObj = {};
    if (open === 0) {
      tempObj[day[0]] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      const filteredByDay = species.filter((available) => available.availability.includes(day[0]));
      const namesByDay = filteredByDay.map((specie) => specie.name);
      tempObj[day[0]] = {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: namesByDay,
      };
    }
    Object.assign(output, tempObj);
  });
  return output;
}

function filterByDay(day) {
  const { open, close } = hours[day];

  if (day === 'Monday') {
    return { [day]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }

  const filteredByDay = species.filter((available) => available.availability.includes(day));
  const namesByDay = filteredByDay.map((specie) => specie.name);

  const output = {
    [day]: {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: namesByDay,
    },
  };

  return output;
}

function filteredByAnimal(animal) {
  return species.find((specie) => specie.name === animal).availability;
}

function getSchedule(scheduleTarget) {
  const schedule = Object.keys(hours);
  const animals = species.map((specie) => specie.name);

  if (schedule.includes(scheduleTarget)) return filterByDay(scheduleTarget);
  if (animals.includes(scheduleTarget)) return filteredByAnimal(scheduleTarget);

  return noArgs();
}

module.exports = getSchedule;
