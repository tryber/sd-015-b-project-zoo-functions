const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (entrants === undefined || entrants.length === undefined) {
    return 0;
  }
  const entrantChild = entrants.filter((element) => element.age < 18);
  const entrantSenior = entrants.filter((element) => element.age >= 50);
  const entrantAdult = entrants.filter((element) => element.age >= 18 && element.age < 50);
  const ageGroup = {
    child: entrantChild.length,
    adult: entrantAdult.length,
    senior: entrantSenior.length,
  };
  return ageGroup;
}

function calculateEntry(entrants) {
  if (countEntrants(entrants) === 0) {
    return 0;
  }
  const tablePrice = data.prices;
  const { adult, child, senior } = tablePrice;
  const numberEntrants = countEntrants(entrants);
  const { adult: adultNumber, child: childNumber, senior: seniorNumber } = numberEntrants;
  return adult * adultNumber + child * childNumber + senior * seniorNumber;
}

module.exports = { calculateEntry, countEntrants };
