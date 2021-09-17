const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const classifyByAge = {
    child: entrants.filter((child) => child.age < 18).length,
    adult: entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length,
    senior: entrants.filter((senior) => senior.age >= 50).length,
  };
  return classifyByAge;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const returnCountEntrants = countEntrants(entrants);
  const priceChild = returnCountEntrants.child * prices.child;
  const priceAdult = returnCountEntrants.adult * prices.adult;
  const priceCSenior = returnCountEntrants.senior * prices.senior;
  return priceChild + priceAdult + priceCSenior;
}

module.exports = { calculateEntry, countEntrants };
