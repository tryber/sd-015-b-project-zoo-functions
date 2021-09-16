const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  const totaleEntrants = {
    child: entrants.filter((child) => child.age < 18).length,
    adult: entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length,
    senior: entrants.filter((senior) => senior.age >= 50).length,
  };
  return totaleEntrants;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const getPrices = data.prices;
  const entradas = countEntrants(entrants);
  const valoresTotais = {
    adult: entradas.adult * getPrices.adult,
    child: entradas.child * getPrices.child,
    senior: entradas.senior * getPrices.senior,
  };
  const valoresParaSoma = Object.values(valoresTotais);
  return valoresParaSoma.reduce((acc, atual) => acc + atual);
}

console.log(calculateEntry({}));
module.exports = { calculateEntry, countEntrants };
