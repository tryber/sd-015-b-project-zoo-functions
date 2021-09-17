const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18);
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const senior = entrants.filter((entrant) => entrant.age >= 50);
  return { child: child.length, adult: adult.length, senior: senior.length };
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants.length === undefined) return 0;
  const numberOfEntrants = countEntrants(entrants);
  const childPrice = (data.prices.child * numberOfEntrants.child);
  const adultPrice = (data.prices.adult * numberOfEntrants.adult);
  const seniorPrice = (data.prices.senior * numberOfEntrants.senior);
  return childPrice + adultPrice + seniorPrice;
}

module.exports = { calculateEntry, countEntrants };
