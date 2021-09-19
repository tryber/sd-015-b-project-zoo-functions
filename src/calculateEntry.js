const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const totalEntradas = {
    child: entrants.filter((childs) => childs.age < 18).length,
    adult: entrants.filter((adults) => adults.age >= 18 && adults.age < 50).length,
    senior: entrants.filter((seniors) => seniors.age >= 50).length,
  };
  return totalEntradas;
}

function calculateEntry(entrants) {
  const totalEntrants = countEntrants(entrants);
  const numeroEntrants = Object.values(totalEntrants);
  if (totalEntrants === 0) return 0;
  const pagamentoPorIdade = {
    child: numeroEntrants[0] * data.prices.child,
    adult: numeroEntrants[1] * data.prices.adult,
    senior: numeroEntrants[2] * data.prices.senior,
  };
  const valoresPagos = Object.values(pagamentoPorIdade);
  const totalPago = valoresPagos.reduce((acc, numero) => acc + numero);
  return totalPago;
}

module.exports = { calculateEntry, countEntrants };
