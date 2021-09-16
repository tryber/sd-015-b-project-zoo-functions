const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const ageCategories = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((person) => {
    if (person.age < 18) {
      ageCategories.child += 1;
    } else if (person.age >= 18 && person.age < 50) {
      ageCategories.adult += 1;
    } else {
      ageCategories.senior += 1;
    }
  });
  return ageCategories;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const categories = countEntrants(entrants);
  const owed = categories.child * 20.99 + categories.adult * 49.99 + categories.senior * 24.99;
  return owed;
}

module.exports = { calculateEntry, countEntrants };
