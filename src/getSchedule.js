const data = require('../data/zoo_data');

function getAnimalsAndTime(day) {
  const obj = {};
  const { open } = data.hours[day];
  const { close } = data.hours[day];
  obj.officeHour = `Open from ${open}am until ${close}pm`;
  const specieFilter = data.species.filter((specie) => specie.availability.includes(day));
  const namesMap = specieFilter.map((animal) => animal.name);
  obj.exhibition = namesMap;
  if (day === 'Monday') {
    obj.officeHour = 'CLOSED';
    obj.exhibition = 'The zoo will be closed!';
  }
  return obj;
}

function getDays(string) {
  const result = {};
  const days = Object.keys(data.hours);
  if (days.includes(string)) {
    result[string] = getAnimalsAndTime(string);
  } else if (data.species.map((specie) => specie.name).includes(string)) {
    const animal = data.species.find((element) => element.name === string);
    return animal.availability;
  } else {
    for (let index = 0; index < days.length; index += 1) {
      result[days[index]] = getAnimalsAndTime(days[index]);
    }
  }
  return result;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  return getDays(scheduleTarget);
}

module.exports = getSchedule;
