const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const ageGroup = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((person) => {
    if (person.age < 18) {
      ageGroup.child += 1;
    } else if (person.age >= 50) {
      ageGroup.senior += 1;
    } else { ageGroup.adult += 1; }
  });
  return ageGroup;
}

function calculateEntry(entrants) {
  if (!entrants) { return 0; }
  if (Object.keys(entrants).length === 0) { return 0; }
  const ageGroups = countEntrants(entrants);
  let total = ageGroups.child * data.prices.child;
  total += ageGroups.adult * data.prices.adult;
  total += ageGroups.senior * data.prices.senior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
