const data = require('../data/zoo_data');

const count = 1;

function countEntrants(entrants) {
  // seu código aqui
  const visitors = { child: 0, adult: 0, senior: 0 };

  entrants.forEach((person) => {
    if (person.age < 18) {
      visitors.child += count;
    } else if (person.age >= 18 && person.age < 50) {
      visitors.adult += count;
    } else {
      visitors.senior += count;
    }
  });
  return visitors;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length < count) {
    return 0;
  }
  const functionCountEntrants = countEntrants(entrants);
  const { child, adult, senior } = functionCountEntrants;
  const sum = (child * data.prices.child)
   + (adult * data.prices.adult)
   + (senior * data.prices.senior);
  return sum;
}

module.exports = { calculateEntry, countEntrants };
