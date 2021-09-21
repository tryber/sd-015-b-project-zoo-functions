const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((person) => person.age < 18).length;
  const adult = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  const senior = entrants.filter((person) => person.age >= 50).length;
  const entrantsByAge = { child, adult, senior };
  return entrantsByAge;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const totalEntrants = countEntrants(entrants);
  const priceChild = totalEntrants.child * prices.child;
  const priceAdult = totalEntrants.adult * prices.adult;
  const priceSenior = totalEntrants.senior * prices.senior;
  const priceSum = priceChild + priceAdult + priceSenior;
  return priceSum;
}

module.exports = { calculateEntry, countEntrants };
