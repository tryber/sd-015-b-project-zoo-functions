const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const childrens = entrants.filter((visitants) => visitants.age < 18).length;
  const adults = entrants.filter((visitants) => visitants.age >= 18 && visitants.age < 50).length;
  const seniors = entrants.filter((visitants) => visitants.age >= 50).length;

  return {
    child: childrens,
    adult: adults,
    senior: seniors,
  };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined) {
    return 0;
  }

  if (Object.keys(entrants).length === 0) {
    return 0;
  }

  const visitants = [countEntrants(entrants)];
  const priceForChild = visitants[0].child * prices.child;
  const priceForAdult = visitants[0].adult * prices.adult;
  const priceForSenior = visitants[0].senior * prices.senior;

  return priceForChild + priceForAdult + priceForSenior;
}

module.exports = { calculateEntry, countEntrants };
