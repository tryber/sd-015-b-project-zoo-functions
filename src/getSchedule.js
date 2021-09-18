const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function allSche() {
  const hoursKeys = Object.keys(hours);
  const obj = {};
  const animal = species.filter((elemento) => elemento.availability);
  hoursKeys.map((elemento) => {
    obj[elemento] = {officeHour: `Open from ${hours[elemento].open}am until ${hours[elemento].close}pm`,
    exhibition: animal.map((elemento) => {
      for (let i = 0; i < hoursKeys.length; i += 1) {
        console.log(elemento.availability);
        if (elemento.availability === hoursKeys[i]) {
          console.log(elemento.name)
        }
      }
    })};
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

console.log(allSche())