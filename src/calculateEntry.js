const data = require('../data/zoo_data');
const { price } = require('../data/zoo_data');

function countEntrants(entrants) {
  const childCount = entrants.filter((entrant) => entrant.age < 18).length;
  const adultCount = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const seniorCount = entrants.filter((entrant) => entrant.age >= 50).length;
  return { child: childCount, adult: adultCount, senior: seniorCount };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const agePeopleEntrants = countEntrants(entrants);
  const childPriceCount = agePeopleEntrants * price.child;
  const adultPriceCount = agePeopleEntrants * price.adult;
  const seniorPriceCount = agePeopleEntrants * price.senior;
  return childPriceCount + adultPriceCount + seniorPriceCount;
}

module.exports = { calculateEntry, countEntrants };
