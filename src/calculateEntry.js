const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  return {
    child,
    adult,
    senior,
  };
}

function calculateEntry(entrants) {
  // Caso nenhum parametro seja passado ou parametro seja um objeto vazio
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  // Calcula total a pagar
  const entrantsByAge = countEntrants(entrants);
  const totalBillChildren = entrantsByAge.child * prices.child;
  const totalBillAdults = entrantsByAge.adult * prices.adult;
  const totalBillSeniors = entrantsByAge.senior * prices.senior;
  return totalBillChildren + totalBillAdults + totalBillSeniors;
}

module.exports = { calculateEntry, countEntrants };
