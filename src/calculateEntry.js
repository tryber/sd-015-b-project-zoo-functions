const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (Object.keys(entrants).length !== 0) {
    const childNum = entrants.filter((element) => element.age < 18);
    const seniorNum = entrants.filter((element) => element.age >= 50);
    const adultNum = entrants.filter((element) => element.age >= 18 && element.age < 50);

    return { child: childNum.length, adult: adultNum.length, senior: seniorNum.length };
  }
  return false;
}

function calculateEntry(entrants) {
  if (entrants && countEntrants(entrants) !== false) {
    // resultado final do problema de objeto visto e entendido a partir do projeto de Daniel Acorroni
    const visitors = countEntrants(entrants);
    const { prices } = data;
    const adult = visitors.adult * prices.adult;
    const child = visitors.child * prices.child;
    const senior = visitors.senior * prices.senior;
    const sum = adult + child + senior;
    return sum;
  } return 0;
}

module.exports = { calculateEntry, countEntrants };
