const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18);
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const senior = entrants.filter((entrant) => entrant.age >= 50);
  return { child: child.length, adult: adult.length, senior: senior.length };
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants.length === undefined) {
    return 0;
  }
  const adultPrice = countEntrants(entrants).adult * prices.adult;
  const childPrice = countEntrants(entrants).child * prices.child;
  const seniorPrice = countEntrants(entrants).senior * prices.senior;
  return adultPrice + childPrice + seniorPrice;
}

module.exports = { calculateEntry, countEntrants };
