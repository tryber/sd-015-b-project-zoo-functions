const { prices } = require('../data/zoo_data');

function getEntrantAgeRange({ age }) {
  if (age < 18) return 'child';
  if (age < 50) return 'adult';
  return 'senior';
}

const countEntrants = (entrants) => entrants
  .reduce((result, entrant) => ({
    ...result, [getEntrantAgeRange(entrant)]: result[getEntrantAgeRange(entrant)] + 1,
  }), { child: 0, adult: 0, senior: 0 });

function calculateEntry(entrants) {
  if (!Array.isArray(entrants)) return 0;

  const { child, adult, senior } = countEntrants(entrants);

  return child * prices.child + adult * prices.adult + senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
