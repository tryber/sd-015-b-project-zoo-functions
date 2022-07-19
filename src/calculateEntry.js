const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const result = {};
  const filterChild = entrants.filter((generationsCount) =>
    generationsCount.age < 18);
  result.child = filterChild.length;
  const filterAdult = entrants.filter((generationsCount) =>
    generationsCount.age >= 18 && generationsCount.age < 50);
  result.adult = filterAdult.length;
  const filterSenior = entrants.filter((generationsCount) =>
    generationsCount.age >= 50);
  result.senior = filterSenior.length;
  return result;
}

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  if (Object.entries(entrants).length === 0) return 0;
  const pricesArray = Object.values(data.prices);
  const quantityOfEntrantsArray = Object.values(countEntrants(entrants));
  const sortPricesArray = [];
  sortPricesArray.push(pricesArray[2], pricesArray[0], pricesArray[1]);
  let result = 0;
  for (let i = 0; i < pricesArray.length; i += 1) {
    result = (sortPricesArray[i] * quantityOfEntrantsArray[i]) + result;
  }
  return result;
}

module.exports = { calculateEntry, countEntrants };
