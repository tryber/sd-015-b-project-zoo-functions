const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const senior = entrants.filter((element) => element.age >= 50);
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50);
  const child = entrants.filter((element) => element.age < 18);
  const ages = { child: child.length, adult: adult.length, senior: senior.length };

  return ages;
}

function calculateEntry(entrants) {
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
calculateEntry();

module.exports = { calculateEntry, countEntrants };
