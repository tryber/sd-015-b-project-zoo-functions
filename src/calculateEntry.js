const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const amountEntrants = {};
  const childs = entrants.filter((person) => person.age < 18);
  const adults = entrants.filter((person) => person.age >= 18 && person.age < 50);
  const seniors = entrants.filter((person) => person.age >= 50);

  amountEntrants.child = childs.length;
  amountEntrants.adult = adults.length;
  amountEntrants.senior = seniors.length;
  return amountEntrants;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;

  const adultTotal = countEntrants(entrants).adult * data.prices.adult;
  const childTotal = countEntrants(entrants).child * data.prices.child;
  const seniorTotal = countEntrants(entrants).senior * data.prices.senior;
  const total = adultTotal + childTotal + seniorTotal;

  return total;
}

module.exports = { calculateEntry, countEntrants };
