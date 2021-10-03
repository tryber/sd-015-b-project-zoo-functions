const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

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
  if (entrants !== undefined && Object.keys(entrants).length !== 0) {
    const allEntrants = countEntrants(entrants);
    const { adult, senior, child } = allEntrants;
    return (adult * prices.adult) + (senior * prices.senior) + (child * prices.child);
  }
  return 0;
}
module.exports = { calculateEntry, countEntrants };
