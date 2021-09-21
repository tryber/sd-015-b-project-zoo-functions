const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants = {}) {
  const filterAges = {
    child: entrants.filter(({ age }) => age < 18).length,
    adult: entrants.filter(({ age }) => age >= 18 && age < 50).length,
    senior: entrants.filter(({ age }) => age >= 50).length,
  };

  return filterAges;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const { child, adult, senior } = countEntrants(entrants);

  const amountChild = child * prices.child;
  const amountAdult = adult * prices.adult;
  const amountSenior = senior * prices.senior;

  return amountChild + amountAdult + amountSenior;
}

module.exports = { calculateEntry, countEntrants };
