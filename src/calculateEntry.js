const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  return entrants.reduce((acc, entrantAge) => {
    if (entrantAge.age < 18) {
      return { ...acc, child: acc.child + 1 };
    }
    if (entrantAge.age >= 18 && entrantAge.age < 50) {
      return { ...acc, adult: acc.adult + 1 };
    }
    if (entrantAge.age >= 50) {
      return { ...acc, senior: acc.senior + 1 };
    }
    return { ...acc };
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { prices } = data;
  const entrant = countEntrants(entrants);
  const childPrice = entrant.child * prices.child;
  const adultPrice = entrant.adult * prices.adult;
  const seniorPrice = entrant.senior * prices.senior;
  return childPrice + adultPrice + seniorPrice;
}

module.exports = { calculateEntry, countEntrants };
