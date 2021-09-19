const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const result = {};
  result.child = entrants.filter((entrant) => entrant.age < 18).length;
  result.adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  result.senior = entrants.filter((entrant) => entrant.age >= 50).length;
  return result;
}

const checkParameters = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) {
    return true;
  }
  return false;
};

const totalPrice = (countedEntrants) => {
  const totalChild = countedEntrants.child * data.prices.child;
  const totalAdult = countedEntrants.adult * data.prices.adult;
  const totalSenior = countedEntrants.senior * data.prices.senior;
  return totalChild + totalAdult + totalSenior;
};

function calculateEntry(entrants) {
  // seu código aqui
  if (checkParameters(entrants)) {
    return 0;
  }
  return totalPrice(countEntrants(entrants));
}

module.exports = { calculateEntry, countEntrants };
