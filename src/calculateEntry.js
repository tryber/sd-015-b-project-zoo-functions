const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const peopleAge = entrants.map((person) => person.age);
  const child = peopleAge.filter((age) => age < 18);
  const adult = peopleAge.filter((age) => age >= 18 && age < 50);
  const senior = peopleAge.filter((age) => age >= 50);
  return ({
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  });
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const people = countEntrants(entrants);
  const price = (people.child * 20.99) + (people.adult * 49.99) + (people.senior * 24.99);
  return price;
}

module.exports = { calculateEntry, countEntrants };
