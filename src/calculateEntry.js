const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const entrantsCounters = {
    child: entrants.filter((entrant) => entrant.age < 18).length,
    adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
    senior: entrants.filter((entrant) => entrant.age >= 50).length,
  };

  return entrantsCounters;
}

const getEntrancePrices = ({ child, adult, senior }) => {
  const childPrice = child * prices.child;
  const adultPrice = adult * prices.adult;
  const seniorPrice = senior * prices.senior;

  return [childPrice, adultPrice, seniorPrice];
};

const validateEntrants = (entrants) => {
  let result;

  if (!entrants) {
    result = false;
  } else if (Object.keys(entrants).length === 0) {
    result = false;
  } else {
    result = true;
  }

  return result;
};
function calculateEntry(entrants) {
  if (!validateEntrants(entrants)) return 0;

  const entrantsCounter = countEntrants(entrants);
  const priceList = getEntrancePrices(entrantsCounter);
  const entryPrice = priceList.reduce((acc, price) => acc + price);

  return entryPrice;
}

module.exports = { calculateEntry, countEntrants };
