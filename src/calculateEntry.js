const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (entrants) {
    if (Object.entries(entrants).length === 0) { return 0; }
    const objEntrants = { adult: 0, child: 0, senior: 0 };
    objEntrants.child = entrants.filter(({ age }) => age < 18).length;
    objEntrants.adult = entrants.filter(({ age }) => age >= 18 && age < 50).length;
    objEntrants.senior = entrants.filter(({ age }) => age >= 50).length;
    return objEntrants;
  }
  return 0;
}

function calculateEntry(entrants) {
  if (countEntrants(entrants) === 0) { return 0; }
  const visit = countEntrants(entrants);
  return visit.senior * prices.senior + visit.adult * prices.adult + visit.child * prices.child;
}

module.exports = { calculateEntry, countEntrants };
