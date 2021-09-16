const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui

  let adult = 0;
  let child = 0;
  let senior = 0;
  const idades = entrants.map((entrant) => entrant.age);
  idades.forEach((idade) => {
    if (idade < 18) {
      child += 1;
    } else if (idade < 50) {
      adult += 1;
    } else {
      senior += 1;
    }
  });
  const quantidadePorIdade = { adult, child, senior };
  return quantidadePorIdade;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { adult, senior, child } = prices;
  const precos = countEntrants(entrants);
  const valorTotal = precos.adult * adult + precos.child * child + precos.senior * senior;

  return valorTotal;
}

module.exports = { calculateEntry, countEntrants };
