const data = require('../data/zoo_data');

function countEntrants(entrants) {
  console.log(Object.keys(entrants));
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const child = entrants.filter((each) => each.age < 18);
  const adult = entrants.filter((each) => each.age >= 18 && each.age < 50);
  const senior = entrants.filter((each) => each.age >= 50);
  return { child: child.length, adult: adult.length, senior: senior.length };
}

function calculateEntry(entrants) {
  if (!entrants || (Object.keys(entrants).length === 0)) return 0;
  const allPeople = countEntrants(entrants);
  return (allPeople.child * 20.99) + (allPeople.senior * 24.99) + (allPeople.adult * 49.99);
}

module.exports = { calculateEntry, countEntrants };
