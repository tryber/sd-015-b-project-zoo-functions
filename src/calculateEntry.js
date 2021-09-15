const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function calcPeoples(entrants) {
  return entrants.reduce((acc, entrant) => {
    if (entrant.age >= 50) {
      acc.senior += 1;
      return acc;
    }
    if (entrant.age >= 18) {
      acc.adult += 1;
      return acc;
    }
    acc.child += 1;
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function countEntrants(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  return calcPeoples(entrants);
}

function calculateEntry(entrants) {
  // seu código aqui
  if (countEntrants(entrants) === 0) {
    return 0;
  }
  const totalPeoples = countEntrants(entrants);
  let totalPrice = totalPeoples.child * prices.child;
  totalPrice += totalPeoples.senior * prices.senior;
  totalPrice += totalPeoples.adult * prices.adult;
  return totalPrice;
}

module.exports = { calculateEntry, countEntrants };
