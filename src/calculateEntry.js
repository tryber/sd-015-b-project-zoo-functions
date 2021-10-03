const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const counter = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach(({ age }) => {
    if (age < 18) counter.child += 1;
    if (age >= 18 && age < 50) counter.adult += 1;
    if (age >= 50) counter.senior += 1;
  });
  return counter;
}

function calculateEntry(entrants) {
  let totalCost = 0;
  if (!entrants || !entrants[0]) {
    return totalCost;
  }
  const entries = countEntrants(entrants);
  totalCost += entries.child * 20.99 + entries.adult * 49.99 + entries.senior * 24.99;
  return totalCost;
}

module.exports = { calculateEntry, countEntrants };
