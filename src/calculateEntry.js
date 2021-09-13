const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entryes = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((entry) => {
    if (entry.age < 18) entryes.child += 1;
    if (entry.age >= 50) entryes.senior += 1;
    if (entry.age >= 18 && entry.age < 50) entryes.adult += 1;
  });
  return entryes;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const entryes = countEntrants(entrants);
  let total = 0;
  Object.keys(entryes).forEach((entry) => {
    total += entryes[entry] * data.prices[entry];
  });
  return total;
}

module.exports = {
  calculateEntry,
  countEntrants,
};
