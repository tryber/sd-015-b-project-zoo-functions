const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const countedEntrants = {
    child: entrants.filter((child) => child.age < 18).length,
    adult: entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length,
    senior: entrants.filter((senior) => senior.age >= 50).length,
  };
  return countedEntrants;
};

function calculateEntry(entrants) {
  // seu código aqui
  const entries = countEntrants(entrants);
  if (entries === 0) {
    return 0;
  }
  const { child, adult, senior } = prices;
  const sumChild = entries.child * child;
  const sumAdult = entries.adult * adult;
  const sumSenior = entries.senior * senior;
  return sumChild + sumAdult + sumSenior;
}

module.exports = { calculateEntry, countEntrants };
