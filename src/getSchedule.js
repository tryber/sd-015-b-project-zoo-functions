/* eslint-disable keyword-spacing */
const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

function allAnimals() {
  const Obj = {};
  const valuesObj = Object.values(hours); // array de objetos com horas
  Object.keys(hours)
    .forEach((element, index) => {
      Obj[element] = {
        officeHour: ((valuesObj[index].open !== 0)
          ? `Open from ${valuesObj[index].open}am until ${valuesObj[index].close}pm` : 'CLOSED'),
        exhibition: ((valuesObj[index].open !== 0) ? (species
          .filter((specie) => specie.availability
            .includes(element))
          .map((animal) => animal.name)) : 'The zoo will be closed!'),
      };
    });

  return Obj;
}

function filterDays(filtro) {
  const output = {};
  output[filtro] = allAnimals()[filtro];
  return (Object.keys(hours)
    .some((element) => element === filtro) ? output : false);
}

function filterAnimals(animal) {
  return ((species
    .some((specie) => specie.name === animal))
    ? species
      .find((specie) => specie.name === animal)
      .availability : false);
}
function getSchedule(scheduleTarget) {
  // seu código aqui
  // if(scheduleTarget === undefined) return allAnimals();
  if(filterAnimals(scheduleTarget)) return filterAnimals(scheduleTarget);
  if(filterDays(scheduleTarget)) return filterDays(scheduleTarget);
  return allAnimals();
}
getSchedule();
module.exports = getSchedule;

// Requisito resolvido com a ajuda de Gabriel Benedicto
