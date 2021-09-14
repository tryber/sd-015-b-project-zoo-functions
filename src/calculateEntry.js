const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.reduce((criança, person) => (person.age < 18 ? criança + 1 : criança), 0);
  const senior = entrants.reduce((idoso, person) => (person.age >= 50 ? idoso + 1 : idoso), 0);
  const adult = entrants.length - child - senior;
  return {
    child,
    adult,
    senior,
  };
}

function calculateEntry(entrants) {
  let valors = 0;
  if (!entrants || Object.keys(entrants).length === 0) return valors;
  const visitant = countEntrants(entrants);
  valors = visitant.child * prices.child + visitant.adult * prices.adult
   + visitant.senior * prices.senior;
  return valors;
}

module.exports = { calculateEntry, countEntrants };
