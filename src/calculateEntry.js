const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const childCount = entrants.filter((entrant) => entrant.age < 18).length;
  const adultCount = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const seniorCount = entrants.filter((entrant) => entrant.age >= 50).length;
  return { child: childCount, adult: adultCount, senior: seniorCount };
}

function calculateEntry(entrants) {
  if (!entrants || entrants.length === undefined) { return 0; }
  const num = countEntrants(entrants);
  const amount = num.child * prices.child + num.adult * prices.adult + num.senior * prices.senior;
  return amount;
}

module.exports = { calculateEntry, countEntrants };
