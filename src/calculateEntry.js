const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entradas = { adult: 0, child: 0, senior: 0 };
  entrants.forEach((person) => {
    if (person.age < 18) {
      entradas.child += 1;
    } else if (person.age >= 18 && person.age < 50) {
      entradas.adult += 1;
    } else {
      entradas.senior += 1;
    }
  });
  return entradas;
}

function calculateEntry(entrants) {
  if (!entrants || entrants.length === undefined) return 0;
  const entradas = countEntrants(entrants);
  return entradas.child * prices.child + entradas.adult
  * prices.adult + entradas.senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
