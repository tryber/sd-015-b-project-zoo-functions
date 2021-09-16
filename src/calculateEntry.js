const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countChild = (acc, cur) => ((cur.age < 18) ? acc + 1 : acc);
const countAdult = (acc, cur) => ((cur.age >= 18 && cur.age < 50) ? acc + 1 : acc);
const countSenior = (acc, cur) => ((cur.age >= 50) ? acc + 1 : acc);

function countEntrants(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const counter = {
    child: entrants.reduce(countChild, 0),
    adult: entrants.reduce(countAdult, 0),
    senior: entrants.reduce(countSenior, 0),
  };
  return counter;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const { child, adult, senior } = countEntrants(entrants);

  const { child: price1, adult: price2, senior: price3 } = prices;

  return (child * price1) + (adult * price2) + (senior * price3);
}

module.exports = { calculateEntry, countEntrants };
