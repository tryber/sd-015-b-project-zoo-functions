const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (Object.keys(entrants).length !== 0) {
    const child = entrants.filter((element) => element.age < 18);
    const adult = entrants.filter((element) => element.age < 50 && element.age >= 18);
    const senior = entrants.filter((element) => element.age >= 50);
    return { child: child.length,
      adult: adult.length,
      senior: senior.length,
    };
  } return false;
}

function calculateEntry(entrants) {
  if (entrants && countEntrants(entrants) !== false) {
    const totalEntrants = countEntrants(entrants);
    const childPriceTotal = (data.prices.child) * (totalEntrants.child);
    const adultPriceTotal = (data.prices.adult) * (totalEntrants.adult);
    const seniorPriceTotal = (data.prices.senior) * (totalEntrants.senior);
    const totalMoneyReceived = childPriceTotal + adultPriceTotal + seniorPriceTotal;
    return totalMoneyReceived;
  } return 0;
}

module.exports = { calculateEntry, countEntrants };
