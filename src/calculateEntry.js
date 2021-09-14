const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants1) {
  const adult = entrants1.filter((entrants2) => entrants2.age >= 18 && entrants2.age < 50).length;
  const child = entrants1.filter((entrants2) => entrants2.age < 18).length;
  const senior = entrants1.filter((entrants2) => entrants2.age >= 50).length;
  return {
    child,
    adult,
    senior,
  };
}

function calculateEntry(entrants3) {
  if (!entrants3 || Object.keys(entrants3).length === 0) {
    return 0;
  }
  const adult = entrants3.filter((entrants2) => entrants2.age >= 18 && entrants2.age < 50).length;
  const child = entrants3.filter((entrants2) => entrants2.age < 18).length;
  const senior = entrants3.filter((entrants2) => entrants2.age >= 50).length;
  return child * prices.child + adult * prices.adult + senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
