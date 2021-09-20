const { prices } = require( '../data/zoo_data' );
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  return prices.filter(({ price }) => price.child < 18);
}

console.log(countEntrants(entrants));
function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
