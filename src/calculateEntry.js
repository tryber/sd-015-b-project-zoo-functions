const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter(({ age }) => age < 18).length;
  const adult = entrants.filter(({ age }) => (age >= 18 && age < 50)).length;
  const senior = entrants.filter(({ age }) => age >= 50).length;
  const objectEntrantes = { child, adult, senior };
  return objectEntrantes;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  let { child, adult, senior } = prices;
  child *= countEntrants(entrants).child;
  adult *= countEntrants(entrants).adult;
  senior *= countEntrants(entrants).senior;
  const result = child + adult + senior;
  return result;
}

module.exports = { calculateEntry, countEntrants };
