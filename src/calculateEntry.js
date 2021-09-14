const data = require('../data/zoo_data');

function getEntrantAgeRange(entrant) {
  if (entrant.age < 18) {
    return 'child';
  }

  if (entrant.age < 50) {
    return 'adult';
  }

  return 'senior';
}

function countEntrants(entrants) {
  const result = { child: 0, adult: 0, senior: 0 };

  entrants.forEach((entrant) => {
    result[getEntrantAgeRange(entrant)] += 1;
  });

  return result;
}

function calculateEntry(entrants) {
  if (!Array.isArray(entrants)) return 0;

  const { child, adult, senior } = countEntrants(entrants);
  const { prices } = data;

  return child * prices.child + adult * prices.adult + senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
