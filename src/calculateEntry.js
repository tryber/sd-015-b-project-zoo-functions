const { prices } = require('../data/zoo_data');

const countEntrants = (entrants = {}) => {
  const entrantsKeys = Object.keys(entrants);
  if (entrants === undefined || entrantsKeys.length === 0) return 0;

  const entries = {
    child: entrants.filter(({ age }) => age < 18).length,
    adult: entrants.filter(({ age }) => age >= 18 && age < 50).length,
    senior: entrants.filter(({ age }) => age >= 50).length,
  };

  return entries;
};

function calculateEntry(entrants) {
  const checkedEntries = countEntrants(entrants);
  const { child, adult, senior } = countEntrants(entrants);

  const totalChilds = child * prices.child;
  const totalAdults = adult * prices.adult;
  const totalSeniors = senior * prices.senior;

  if (checkedEntries === 0) return 0;

  return totalChilds + totalAdults + totalSeniors;
}

module.exports = { calculateEntry, countEntrants };
