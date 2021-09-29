const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entrantsResult = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((element) => {
    if (element.age < 18) entrantsResult.child += 1;
    if (element.age >= 18 && element.age < 50) entrantsResult.adult += 1;
    if (element.age >= 50) entrantsResult.senior += 1;
  });
  return entrantsResult;
}

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) return 0;
  const { prices } = data;
  const entrantsObj = countEntrants(entrants);
  const childEntry = entrantsObj.child * prices.child;
  const adultEntry = entrantsObj.adult * prices.adult;
  const seniorEntry = entrantsObj.senior * prices.senior;
  return childEntry + adultEntry + seniorEntry;
}

module.exports = { calculateEntry, countEntrants };
