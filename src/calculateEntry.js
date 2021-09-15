const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entrantsObject = {
    child: entrants.filter((entrant) => entrant.age < 18).length,
    adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
    senior: entrants.filter((entrant) => entrant.age >= 50).length,
  };
  return entrantsObject;
}

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
