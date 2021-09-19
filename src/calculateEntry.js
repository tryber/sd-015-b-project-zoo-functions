const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const crianças = entrants.filter((entrant) => entrant.age < 18).length;
  const adultos = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senhores = entrants.filter((entrant) => entrant.age >= 50).length;
  return { child: crianças, adult: adultos, senior: senhores };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || entrants.length === undefined) {
    return 0;
  }
  const quantidades = countEntrants(entrants);
  const total = quantidades.child * prices.child + quantidades
    .adult * prices.adult + quantidades.senior * prices.senior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
