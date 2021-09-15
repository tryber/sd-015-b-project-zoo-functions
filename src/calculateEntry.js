const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((person) => (person.age < 18)).length;
  const adult = entrants.filter((person) => (person.age >= 18 && person.age < 50)).length;
  const senior = entrants.filter((person) => (person.age >= 50)).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const ages = countEntrants(entrants);
  const priceChildrens = ages.child * prices.child;
  const priceAdults = ages.adult * prices.adult;
  const priceSeniors = ages.senior * prices.senior;
  return priceChildrens + priceAdults + priceSeniors;

}

module.exports = { calculateEntry, countEntrants };
