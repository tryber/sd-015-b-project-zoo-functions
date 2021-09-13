const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18);
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const senior = entrants.filter((entrant) => entrant.age >= 50);
  return { child: child.length, adult: adult.length, senior: senior.length };
}

function calculateEntry(entrants) {
  let total = 0;
  if (!entrants || entrants.length === undefined) return total;
  const inners = countEntrants(entrants);
  total = inners.child * 20.99 + inners.adult * 49.99 + inners.senior * 24.99;
  return total;
}
module.exports = { calculateEntry, countEntrants };
