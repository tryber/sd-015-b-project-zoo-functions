const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, person) => {
    if (person.age < 18) return { ...acc, child: acc.child + 1 };
    if (person.age < 50) return { ...acc, adult: acc.adult + 1 };
    if (person.age >= 50) return { ...acc, senior: acc.senior + 1 };
    return { ...acc };
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const people = countEntrants(entrants);
  return (data.prices.child * people.child)
  + (data.prices.adult * people.adult)
  + (data.prices.senior * people.senior);
}

module.exports = { calculateEntry, countEntrants };
