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
  if (entrants === 0 || entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const priceChild = (countEntrants(entrants).child * prices.child);
  const priceAdult = (countEntrants(entrants).adult * prices.adult);
  const priceSenior = (countEntrants(entrants).senior * prices.senior);
  return (priceChild + priceAdult + priceSenior);
}

module.exports = { calculateEntry, countEntrants };
