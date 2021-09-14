const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const childNum = entrants.filter((element) => element.age < 18);
  const seniorNum = entrants.filter((element) => element.age >= 50);
  const adultNum = entrants.filter((element) => element.age >= 18 && element.age < 50);

  const result = { child: childNum.length, adult: adultNum.length, senior: seniorNum.length };
  return result;
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  const visitors = countEntrants(entrants);
  const { prices } = data;
  const adult = visitors.adult * prices.adult;
  const child = visitors.child * prices.child;
  const senior = visitors.senior * prices.senior;
  const newSum = adult + child + senior;
  return newSum;
}

module.exports = { calculateEntry, countEntrants };
