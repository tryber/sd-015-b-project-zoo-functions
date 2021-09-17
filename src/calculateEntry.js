const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entrantsCount = entrants.reduce((acc, entrant) => {
    if (entrant.age < 18) return ({ ...acc, child: acc.child + 1 });
    if (entrant.age >= 18 && entrant.age < 50) return ({ ...acc, adult: acc.adult + 1 });
    if (entrant.age >= 50) return ({ ...acc, senior: acc.senior + 1 });
    return { ...acc };
  }, { adult: 0, child: 0, senior: 0 });
  return entrantsCount;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const ageEntrants = countEntrants(entrants);
  let finalPrice = 0;
  finalPrice += ageEntrants.child * prices.child;
  finalPrice += ageEntrants.adult * prices.adult;
  finalPrice += ageEntrants.senior * prices.senior;
  return finalPrice;
}

module.exports = { calculateEntry, countEntrants };
