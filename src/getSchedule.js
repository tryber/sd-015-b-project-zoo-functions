const { name } = require('faker');
const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function day(obj, elemento) {
  if (elemento === 'Monday') {
    return 'CLOSED'
  }
  return `Open from ${hours[elemento].open}am until ${hours[elemento].close}pm`
}

function exhibAnimal(elemento) {
  if (elemento === 'Monday') {
    return 'The zoo will be closed!'
  }
  const animalAv = species.filter((specie) => (specie.availability.includes(elemento)));
  const getName = animalAv.map((elemento) => elemento.name)
  return getName
}

function allSche() {
  const hoursKeys = Object.keys(hours);
  const obj = {};
  hoursKeys.map((elemento) => {
    obj[elemento] = {
      officeHour: day(obj, elemento),
      exhibition: exhibAnimal(elemento)};
  })
  return obj;
}

function getSchedule(scheduleTarget) {
  const animalName = species.map((elemento) => elemento.name);
  const dayName = Object.keys(hours);
  if (scheduleTarget === undefined) {
    return allSche();
  } else if (!scheduleTarget.includes(animalName) || !scheduleTarget.includes(dayName)) {
    return allSche();
  }
}

module.exports = getSchedule;

console.log(allSche());