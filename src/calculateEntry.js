const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const entrantsKeys = Object.keys(entrants);
  if (entrants === undefined || entrantsKeys.length === 0) return 0;

  const entries = {
    child: entrants.filter((entrant) => entrant.age < 18).length,
    adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
    senior: entrants.filter((entrant) => entrant.age >= 50).length,
  };

  return entries;
};

function calculateEntry(entrants) {
  const checkedEntries = countEntrants(entrants);
  if (checkedEntries === 0) return 0;

  const totalChilds = checkedEntries.child * prices.child;
  const totalAdults = checkedEntries.adult * prices.adult;
  const totalSeniors = checkedEntries.senior * prices.senior;

  return totalChilds + totalAdults + totalSeniors;
}

module.exports = { calculateEntry, countEntrants };
