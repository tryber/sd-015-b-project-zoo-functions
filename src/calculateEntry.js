const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entries = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((entry) => {
    if (entry.age < 18) entries.child += 1;
    if (entry.age >= 50) entries.senior += 1;
    if (entry.age >= 18 && entry.age < 50) entries.adult += 1;
  });
  return entries;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const entries = countEntrants(entrants);
  let total = 0;
  Object.keys(entries).forEach((entry) => {
    total += entries[entry] * data.prices[entry];
  });
  return total;
}

module.exports = {
  calculateEntry,
  countEntrants,
};
