const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entrantsObject = {
    child: entrants.filter((entrant) => entrant.age < 18).length,
    adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
    senior: entrants.filter((entrant) => entrant.age >= 50).length,
  };
  return entrantsObject;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const prices = {
    child: 20.99,
    adult: 49.99,
    senior: 24.99,
  };
  const entrantsObject = countEntrants(entrants);

  const totalPrice = prices.child * entrantsObject.child
    + prices.adult * entrantsObject.adult
    + prices.senior * entrantsObject.senior;

  return totalPrice;
}

module.exports = { calculateEntry, countEntrants };
