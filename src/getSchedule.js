const data = require('../data/zoo_data');

const daysOfWeek = Object.keys(data.hours); // sem parâmetros

const animalNames = data.species.map((element) => element.name);
// console.log(animalNames);

const valueOfDaysOfWeek = (day) => { // sem parâmetros
  const dayObjectValue = {
    officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
    exhibition: data.species.filter((element) => element.availability.includes(day))
      .map((element) => element.name),
  };
  if (data.hours[day].open === 0) {
    dayObjectValue.officeHour = 'CLOSED';
    dayObjectValue.exhibition = 'The zoo will be closed!';
  }
  return dayObjectValue;
};

const callback = (accumulator, element) => { // sem parâmetros
  accumulator[element] = valueOfDaysOfWeek(element);
  return accumulator;
};

function getSchedule(scheduleTarget) { // sem parâmetros
  // seu código aqui
  if (daysOfWeek.includes(scheduleTarget)) {
    const objt = {};
    objt[scheduleTarget] = valueOfDaysOfWeek(scheduleTarget);
    return objt;
  }
  if (animalNames.includes(scheduleTarget)) {
    const animalAvailability = data.species
      .find((element) => element.name === scheduleTarget).availability;
    return animalAvailability;
  }
  const objectDaysOfWeek = daysOfWeek.reduce(callback, {});
  return objectDaysOfWeek;
}

console.log(getSchedule('lions'));
module.exports = getSchedule;
