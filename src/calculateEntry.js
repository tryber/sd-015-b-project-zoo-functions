const data = require('../data/zoo_data');

function classifyAges(arr, obj) {
  const classObj = obj;
  arr.forEach((element) => {
    const { age } = element;
    if (age < 18) {
      classObj.child += 1;
    } else if (age < 50) {
      classObj.adult += 1;
    } else {
      classObj.senior += 1;
    }
  });
  return classObj;
}

function countEntrants(entrants) {
  const classifyAge = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  if (entrants && Array.isArray(entrants)) {
    return classifyAges(entrants, classifyAge);
  }
  return classifyAge;
}

function calculateEntry(entrants) {
  const numberAges = countEntrants(entrants);
  const { prices } = data;
  return Object.keys(numberAges).reduce((acc, curr) => acc + numberAges[curr] * prices[curr], 0);
}

module.exports = { calculateEntry, countEntrants };
