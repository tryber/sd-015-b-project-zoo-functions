const { species } = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

const getAnimalsForDay = () => {
  const object = {};
  const values = Object.entries(hours);
  let available = [];
  let names = [];
  values.forEach((dia) => {
    available = species.filter(({ availability }) => availability.includes(dia[0]));
    names = available.map(({ name }) => name);
    object[dia[0]] = {
      officeHour: `Open from ${dia[1].open}am until ${dia[1].close}pm`,
      exhibition: names,
    };
  });
  object.Monday.officeHour = 'CLOSED';
  object.Monday.exhibition = 'The zoo will be closed!';
  return object;
};

const getDay = (diaSemana) => {
  const object = getAnimalsForDay();
  const result = {};
  result[diaSemana] = object[diaSemana];
  return result;
};

const getAnimalExhibition = (animal) => {
  const result = (species.find(({ name }) => name === animal).availability);
  return result;
};

function getSchedule(parameter) {
  const animalsForDay = getAnimalsForDay();
  const semana = Object.keys(animalsForDay);
  const nomes = species.map(({ name }) => name);
  if (!parameter) return animalsForDay;
  if (parameter === 'Monday') return getDay(parameter);
  if (semana.includes(parameter)) return getDay(parameter);
  if (nomes.includes(parameter)) return getAnimalExhibition(parameter);
  return animalsForDay;
}
console.log(getSchedule('qualquercoisa'));
// console.log(getAnimalExhibition());
module.exports = getSchedule;
