const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  const result = {
    child,
    adult,
    senior,
  };
  return result;
}

function calculateEntry(entrants = 0) {
  if (entrants === 0 || Object.keys(entrants).length === 0) {
    return 0;
  }
  const visitants = countEntrants(entrants);
  const minor = visitants.child * prices.child;
  const major = visitants.senior * prices.senior + visitants.adult * prices.adult;
  return minor + major;
}

module.exports = { calculateEntry, countEntrants };
