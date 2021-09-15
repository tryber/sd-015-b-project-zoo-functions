const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const childs = entrants.filter((person) => (person.age < 18)).length;
  const adults = entrants.filter((person) => (person.age >= 18 && person.age < 50)).length;
  const seniors = entrants.filter((person) => (person.age >= 50)).length;
  
  const resultList = { child: childs, adult: adults, senior: seniors };

  return resultList;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || entrants.length === undefined) return 0;
  const countResult = countEntrants(entrants);
  const prices = [20.99, 49.99, 24.99];
  const childResult = countResult.child * prices[0];
  const adultResult = countResult.adult * prices[1];
  const seniorResult = countResult.senior * prices[2];
  const result = childResult + adultResult + seniorResult;
  return result;
}

module.exports = { calculateEntry, countEntrants };
