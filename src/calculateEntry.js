const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const obj = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((person) => {
    if (person.age < 18) obj.child += 1;
    if (person.age >= 18 && person.age < 50) obj.adult += 1;
    if (person.age >= 50) obj.senior += 1;
  });
  return obj;
}

function calculateEntry(entrants) {
  let entryValue = 0;
  if (!entrants || !entrants[0]) return entryValue;
  const visitors = countEntrants(entrants);
  entryValue = visitors.child * prices.child + visitors.adult * prices.adult
  + visitors.senior * prices.senior;
  return entryValue;
}

module.exports = { calculateEntry, countEntrants };
