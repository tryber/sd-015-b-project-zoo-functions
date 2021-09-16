const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter(({ age }) => age < 18).length;
  const adult = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const senior = entrants.filter(({ age }) => age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const visitors = countEntrants(entrants);
  let { child, adult, senior } = prices;
  child *= visitors.child;
  adult *= visitors.adult;
  senior *= visitors.senior;
  return child + adult + senior;
}

module.exports = { calculateEntry, countEntrants };
