const data = require('../data/zoo_data');

function countEntrants(entrants = []) {
  // seu código aqui
  return {
    child: entrants.filter((e) => e.age < 18).length,
    adult: entrants.filter((e) => e.age >= 18 && e.age < 50).length,
    senior: entrants.filter((e) => e.age >= 50).length,
  };
}

function calculateEntry(entrants = null) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entries = countEntrants(entrants);
  return (data.prices.child * entries.child)
    + (data.prices.adult * entries.adult)
    + (data.prices.senior * entries.senior);
}

module.exports = { calculateEntry, countEntrants };
