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
  const hoursKeys = Object.keys(hours);
  const animal = species.filter((elemento) => elemento.availability);
  if (elemento === 'Monday') {
    return 'The zoo will be closed!'
  }
  const avaiableAn = animal.map((elemento) => elemento.availability)
  const names = animal.map((elemento) => {
    for (let i = 0; i < hoursKeys.length; i += 1) {
      if (elemento.availability[i] === hoursKeys[i]) {
        return elemento.name
      }
    }
  })
  return avaiableAn
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

// function officeSche() {
//   const days = days();
//   return days
// }

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {

  }
  
}

module.exports = getSchedule;

console.log(exhibAnimal())