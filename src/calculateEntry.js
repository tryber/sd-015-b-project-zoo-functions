const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return {
    child: entrants.filter((peoples) => peoples.age < 18).length,
    adult: entrants.filter((peoples) => peoples.age >= 18 && peoples.age < 50).length,
    senior: entrants.filter((peoples) => peoples.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) { return 0; }

  const people = countEntrants(entrants);
  const childPrice = data.prices.child * people.child;
  const adultPrice = data.prices.adult * people.adult;
  const seniorPrice = data.prices.senior * people.senior;
  return childPrice + adultPrice + seniorPrice;
}
console.log(calculateEntry({}));
module.exports = { calculateEntry, countEntrants };
