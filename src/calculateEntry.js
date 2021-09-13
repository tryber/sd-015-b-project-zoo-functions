const data = require('../data/zoo_data');

function classifyAges(arr) {
  arr.forEach((element) => {
    const { age } = element;
    if (age < 18) {
      classifyAge.child += 1;
    } else if (age < 50) {
      classifyAge.adult += 1;
    } else {
      classifyAge.senior += 1;
    }
  });
}

function countEntrants(entrants) {
  const classifyAge = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants && Array.isArray(entrants) ? classifyAges(entrants) : false;
  return classifyAge;
}

function calculateEntry(entrants) {
  const numberAges = countEntrants(entrants);
  const { prices } = data;
  return Object.keys(numberAges).reduce((acc, curr) => acc + numberAges[curr] * prices[curr], 0);
}

module.exports = { calculateEntry, countEntrants };
