const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let childCount = 0;
  let adultCount = 0;
  let seniorCount = 0;

  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      childCount += 1;
    } else if (entrant.age >= 50) {
      seniorCount += 1;
    } else {
      adultCount += 1;
    }
  });

  return { child: childCount, adult: adultCount, senior: seniorCount };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }

  const totalEntrants = countEntrants(entrants);
  let totalValue = 0;
  const childTotal = totalEntrants.child * 20.99;
  const adultTotal = totalEntrants.adult * 49.99;
  const seniorTotal = totalEntrants.senior * 24.99;

  totalValue = childTotal + adultTotal + seniorTotal;
  return totalValue;
}

module.exports = { calculateEntry, countEntrants };
