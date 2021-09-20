const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const totalEntrants = {
    child: entrants.filter((child) => child.age < 18).length,
    adult: entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length,
    senior: entrants.filter((senior) => senior.age >= 50).length,
  };
  return totalEntrants;
}

function calculateEntry(entrants) {
  const totalEntrants = countEntrants(entrants);
  const numEntrants = Object.values(totalEntrants);
  if (totalEntrants === 0) return 0;
  const totalByIndividual = {
    child: numEntrants[0] * prices.child,
    adult: numEntrants[1] * prices.adult,
    senior: numEntrants[2] * prices.senior,
  };
  const individualsValue = Object.values(totalByIndividual);
  const finalValue = individualsValue.reduce((acc, num) => acc + num);
  return finalValue;
}

module.exports = { calculateEntry, countEntrants };
