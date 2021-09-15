const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const childrens = entrants.filter((person) => (person.age < 18)).length;
  const adults = entrants.filter((person) => (person.age >= 18 && person.age < 50)).length;
  const seniors = entrants.filter((person) => (person.age >= 50)).length;
  const result = { child: childrens, adult: adults, senior: seniors };
  return result
}

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
