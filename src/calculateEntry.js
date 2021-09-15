const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter((entrant) => entrant.age < 18);
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const senior = entrants.filter((entrant) => entrant.age >= 50);
  return { child: child.length, adult: adult.length, senior: senior.length };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const onlyEntrants = countEntrants(entrants);
  const onlyChild = onlyEntrants.child * prices.child;
  const onlyAdult = onlyEntrants.adult * prices.adult;
  const onlySenior = onlyEntrants.senior * prices.senior;
  return onlyChild + onlyAdult + onlySenior;
}

module.exports = { calculateEntry, countEntrants };
