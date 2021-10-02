/* eslint-disable max-lines-per-function */
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const visitor = {
    adult: 0,
    child: 0,
    senior: 0,
  };
  entrants.forEach(({ age }) => {
    if (age < 18) {
      visitor.child += 1;
    } else if (age >= 18 && age < 50) {
      visitor.adult += 1;
    } else {
      visitor.senior += 1;
    }
  });
  return visitor;
}

function calculateEntry(entrants) {
  if (!entrants || !Object.keys(entrants).length) {
    return 0;
  }
  const { adult, child, senior } = countEntrants(entrants);
  return (
    (adult * prices.adult) + (child * prices.child) + (senior * prices.senior)
  );
}

module.exports = { calculateEntry, countEntrants };
