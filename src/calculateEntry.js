const data = require('../data/zoo_data');

function childVer(acc, kid) {
  let count = acc;
  if (kid.age < 18) { count += 1; }
  return count;
}

function adultVer(acc, person) {
  let counter = acc;
  if (person.age >= 18 && person.age < 50) { counter += 1; }
  return counter;
}

function oldVer(acc, old) {
  let cc = acc;
  if (old.age >= 50) { cc += 1; }
  return cc;
}

function countEntrants(entrants) {
  // seu código aqui
  const enters = {
    child: entrants.reduce(childVer, 0),
    adult: entrants.reduce(adultVer, 0),
    senior: entrants.reduce(oldVer, 0),
  };
  return enters;
}

function calculateEntry(entrants = 0) {
  // seu código aqui
  let totalValue = 0;
  if (Object.keys(entrants).length === 0 || entrants === 0) { return totalValue; }
  const { child, adult, senior } = countEntrants(entrants);
  totalValue = (child * 20.99) + (adult * 49.99) + (senior * 24.99);
  return totalValue;
}

module.exports = { calculateEntry, countEntrants };
