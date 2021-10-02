const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const allEntrants = {
    adult: 0,
    senior: 0,
    child: 0,
  };
  entrants.forEach(({ age } = entrants) => {
    if (age >= 18 && age < 50) {
      allEntrants.adult += 1;
    }
    if (age >= 50) {
      allEntrants.senior += 1;
    }
    if (age < 18) {
      allEntrants.child += 1;
    }
  });
  return allEntrants;
}

function calculateEntry(entrants) {
  // seu código aqui
}
module.exports = { calculateEntry, countEntrants };
