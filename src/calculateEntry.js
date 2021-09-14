const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const totalEntrants = { child: 0, adult: 0, senior: 0 };
  const callback = (_, currAge) => {
    if (currAge.age < 18) {
      totalEntrants.child += 1;
    }
    if (currAge.age >= 18 && currAge.age < 50) {
      totalEntrants.adult += 1;
    }
    if (currAge.age >= 50) {
      totalEntrants.senior += 1;
    }
  };
  entrants.reduce(callback, 0);
  return totalEntrants;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const allEntrants = countEntrants(entrants);
  return allEntrants.child * 20.99 + allEntrants.adult * 49.99 + allEntrants.senior * 24.99;
}

module.exports = { calculateEntry, countEntrants };
