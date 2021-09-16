const data = require('../data/zoo_data');

const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const { hours, species } = data;
const result = {};

function animalAvailability(scheduleTarget) {
  const animals = species.map((specie) => specie.name);
  const exhibition = species.find((specie) => specie.name === scheduleTarget);
  if (animals.includes(scheduleTarget)) {
    return exhibition.availability;
  }
}

function getSpecie(day) {
  return data.species.filter((specie) =>
    specie.availability.includes(day)).reduce((acc, specie) => {
    acc.push(specie.name);
    return acc;
  }, []);
}

function dealWithNoArguments(scheduleTarget) {
  days.forEach((day) => {
    const { open, close } = hours[day];
    if (day === 'Monday') {
      result[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      result[day] = {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: getSpecie(day),
      };
    }
  });
}

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    dealWithNoArguments();
  }
  if (scheduleTarget === 'Monday') {
    result.monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  }
  if (days.includes(scheduleTarget)) {
    return { [scheduleTarget]: result[scheduleTarget] };
  }
  if (animalAvailability(scheduleTarget)) {
    return animalAvailability(scheduleTarget);
  }
  return result;
}

// console.log(getSchedule('Monday'));

module.exports = getSchedule;
