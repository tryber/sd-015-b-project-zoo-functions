const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return classifyByAge = {
    child: entrants.filter((child) => child.age < 18).length,
    adult: entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length,
    senior: entrants.filter((senior) => senior.age >= 50).length,
  }
}

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };

