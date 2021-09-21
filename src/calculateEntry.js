const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, ages) => {
    if (ages.age < 18) {
      return { ...acc, child: acc.child + 1 };
    } if (ages.age < 50 && ages.age > 17) {
      return { ...acc, adult: acc.adult + 1 };
    } if (ages.age >= 50) {
      return { ...acc, senior: acc.senior + 1 };
    }
    return { ...acc };
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants || !Object.keys(entrants).length) {
    return 0;
  }
  return (prices.child * countEntrants(entrants).child)
  + (prices.adult * countEntrants(entrants).adult)
  + (prices.senior * countEntrants(entrants).senior);
}

module.exports = { calculateEntry, countEntrants };
