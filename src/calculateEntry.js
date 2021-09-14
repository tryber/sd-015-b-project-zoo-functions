const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((elem) => elem.age < 18);
  const adult = entrants.filter((elem) => elem.age >= 18 && elem.age < 50);
  const senior = entrants.filter((elem) => elem.age >= 50);
  const obj = {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };
  return obj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const count = (countEntrants(entrants));
  const priceChild = (count.child * prices.child);
  const priceAdult = (count.adult * prices.adult);
  const priceSenior = (count.senior * prices.senior);
  return (priceChild + priceAdult + priceSenior);
}

module.exports = { calculateEntry, countEntrants };
