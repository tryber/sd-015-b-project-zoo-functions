const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const childCount = entrants.filter((children) => children.age < 18).length;
  const adultCount = entrants.filter((adults) => adults.age >= 18 && adults.age < 50).length;
  const seniorCount = entrants.filter((seniors) => seniors.age >= 50).length;

  return {
    child: childCount,
    adult: adultCount,
    senior: seniorCount,
  };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }

  const { child, adult, senior } = countEntrants(entrants);

  return (child * prices.child) + (adult * prices.adult) + (senior * prices.senior);
}

module.exports = { calculateEntry, countEntrants };
