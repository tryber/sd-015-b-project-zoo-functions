const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let childCount = 0;
  let seniorCount = 0;
  let adultCount = 0;
  entrants.forEach((person) => {
    if (person.age < 18) {
      childCount += 1;
    } else if (person.age >= 50) {
      seniorCount += 1;
    } else {
      adultCount += 1;
    }
  });
  return { child: childCount, adult: adultCount, senior: seniorCount };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entrantsList = countEntrants(entrants);
  const tax = data.prices;
  return Object.keys(entrantsList).reduce((acc, key) => (tax[key] * entrantsList[key]) + acc, 0);
}

module.exports = { calculateEntry, countEntrants };
