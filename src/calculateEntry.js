const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter(({ age }) => age < 18).length;
  const adult = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const senior = entrants.filter(({ age }) => age >= 50).length;
  const objeto = { child, adult, senior };
  return objeto;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const recuperaFuncao = countEntrants(entrants);
  const { child = 0, adult = 0, senior = 0 } = recuperaFuncao;

  const valorAdulto = adult * prices.adult;
  const valorIdoso = senior * prices.senior;
  const valorCrianca = child * prices.child;
  const valorTotal = valorAdulto + valorIdoso + valorCrianca;
  return valorTotal;
}
module.exports = { calculateEntry, countEntrants };
