const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((each) => each.age < 18);
  const adult = entrants.filter((each) => each.age >= 18 && each.age < 50);
  const senior = entrants.filter((each) => each.age >= 50);
  return { child: child.length, adult: adult.length, senior: senior.length };
}

function calculateEntry(entrants) {
  if (!entrants || entrants === {}) return 0;

  // const entrantsArray = countEntrants(entrants);
}
const entrants = [
  { name: 'enzo', age: 5 },
  { name: 'enzo2', age: 5 },
  { name: 'valentina', age: 5 },
  { name: 'jao', age: 18 },
  { name: 'ze', age: 18 },
  { name: 'ana', age: 50 },
];

// console.log(countEntrants(entrants));
console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
