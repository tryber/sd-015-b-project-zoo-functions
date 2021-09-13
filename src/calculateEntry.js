const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const count = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach(({ age }) => {
    if (age < 18) count.child += 1;
    if (age >= 18 && age < 50) count.adult += 1;
    if (age >= 50) count.senior += 1;
  });
  return count;
}

function calculateEntry(entrants) {
  let total = 0;
  if (!entrants || !entrants[0]) return total;
  const entries = countEntrants(entrants);
  total += entries.child * 20.99 + entries.adult * 49.99 + entries.senior * 24.99;
  return total;
}

module.exports = { calculateEntry, countEntrants };

// Starting project
