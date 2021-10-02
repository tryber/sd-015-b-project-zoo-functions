const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const senior = entrants.filter((element) => element.age >= 50);
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50);
  const child = entrants.filter((element) => element.age < 18);
  const ages = { child: child.length, adult: adult.length, senior: senior.length };

  return ages;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  if (entrants) {
    const chamaFunc = countEntrants(entrants);
    const child = chamaFunc.child * prices.child;
    const adult = chamaFunc.adult * prices.adult;
    const senior = chamaFunc.senior * prices.senior;
    const result = child + adult + senior;
    return result;
  }
}

module.exports = { calculateEntry, countEntrants };
