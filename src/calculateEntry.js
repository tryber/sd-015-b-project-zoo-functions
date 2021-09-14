const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }

  const visitantes = {
    child: entrants.filter((crianca) => crianca.age < 18).length,
    adult: entrants.filter((adulto) => adulto.age >= 18 && adulto.age < 50).length,
    senior: entrants.filter((idoso) => idoso.age >= 50).length,
  };
  return visitantes;
}

function calculateEntry(entrants) {
  // seu código aqui
  const verificaEntrada = countEntrants(entrants);
  if (verificaEntrada === 0) {
    return 0;
  }

  const valorTotal = (verificaEntrada.child * data.prices.child)
    + (verificaEntrada.adult * data.prices.adult) + (verificaEntrada.senior * data.prices.senior);

  return valorTotal;
}

module.exports = { calculateEntry, countEntrants };
