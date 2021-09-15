const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const valorZero = 0;
  if (entrants === undefined || Object.keys(entrants).length === valorZero) {
    return valorZero;
  }

  const visitantes = {
    child: entrants.filter((idade) => idade.age < 18).length,
    adult: entrants.filter((idade) => idade.age >= 18 && idade.age < 50).length,
    senior: entrants.filter((idade) => idade.age >= 50).length,
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
