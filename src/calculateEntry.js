const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entradas = entrants;
  const child = entradas.filter(({ age }) => age < 18).length;
  const adult = entradas.filter(({ age }) => age >= 18 && age < 50).length;
  const senior = entradas.filter(({ age }) => age >= 50).length;
  const object = { child, adult, senior };
  return object;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  let { child, adult, senior } = prices;
  child *= countEntrants(entrants).child;
  adult *= countEntrants(entrants).adult;
  senior *= countEntrants(entrants).senior;
  return child + adult + senior;
}

module.exports = { calculateEntry, countEntrants };
