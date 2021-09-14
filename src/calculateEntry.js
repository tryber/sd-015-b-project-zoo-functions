const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const result = { child: 0, adult: 0, senior: 0 };

  entrants.forEach(({ age }) => {
    if (age < 18) result.child += 1;
    if (age >= 18 && age < 50) result.adult += 1;
    if (age >= 50) result.senior += 1;
  });
  return result;
}

function calculateEntry(entrants) {
  let result = 0;
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const entries = countEntrants(entrants);
  result += entries.child * 20.99 + entries.adult * 49.99 + entries.senior * 24.99;
  return result;
}

module.exports = { calculateEntry, countEntrants };
