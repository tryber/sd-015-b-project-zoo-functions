const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return prices;
}
// console.log(countEntrants(prices));

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  } if (entrants) {
    return 0;
  }
}
console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };
