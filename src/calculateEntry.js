const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  return {
    child,
    adult,
    senior,
  };
}

function calculateEntry(entrants) {
  if (!entrants || !entrants.length) {
    return 0;
  }
  const visitors = countEntrants(entrants);
  const totalChildren = visitors.child * data.prices.child;
  const totalAdults = visitors.adult * data.prices.adult;
  const totalSeniors = visitors.senior * data.prices.senior;
  return totalChildren + totalAdults + totalSeniors;
}

module.exports = { calculateEntry, countEntrants };
