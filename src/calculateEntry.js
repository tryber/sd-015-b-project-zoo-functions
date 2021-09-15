const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const resultado = entrants.reduce((acc, elemento) => {
    if (elemento.age < 18) {
      acc.child += 1;
      return acc;
    } if (elemento.age >= 18 && elemento.age < 50) {
      acc.adult += 1;
      return acc;
    }
    acc.senior += 1;
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
  return resultado;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }

  const test = countEntrants(entrants);
  const valorAdulto = prices.adult * test.adult;
  const valorCrianca = prices.child * test.child;
  const valorIdoso = prices.senior * test.senior;
  const resultado = valorAdulto + valorCrianca + valorIdoso;
  return resultado;
}

module.exports = { calculateEntry, countEntrants };
