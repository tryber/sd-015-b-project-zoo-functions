const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  // seu código aqui
  const entradas = entrants;
  const child = entradas.filter(({ age }) => age < 18).length;
  const adult = entradas.filter(({ age }) => age >= 18 && age < 50).length;
  const senior = entradas.filter(({ age }) => age >= 50).length;
  const object = { child, adult, senior };
  return object;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  let { child, adult, senior } = prices;
  child *= countEntrants(entrants).child;
  adult *= countEntrants(entrants).adult;
  senior *= countEntrants(entrants).senior;
  const result = child + adult + senior;
  return result;
}

module.exports = { calculateEntry, countEntrants };
