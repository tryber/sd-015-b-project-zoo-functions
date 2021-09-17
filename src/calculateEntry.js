const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const result = {};
  let child = 0;
  let adult = 0;
  let senior = 0;

  entrants.forEach((entrant) => {
    if (entrant.age < 18) child += 1;

    if (entrant.age >= 18 && entrant.age < 50) adult += 1;

    if (entrant.age >= 50) senior += 1;

    result.child = child;
    result.adult = adult;
    result.senior = senior;
  });

  return result;
}

function sum(entrant) {
  const visitants = countEntrants(entrant);
  const childs = visitants.child * prices.child;
  const adults = visitants.adult * prices.adult;
  const seniors = visitants.senior * prices.senior;

  const result = childs + adults + seniors;

  return result;
}

function calculateEntry(entrants) {
  if (!entrants || !Array.isArray(entrants)) return 0;

  return sum(entrants);
}

module.exports = { calculateEntry, countEntrants };
