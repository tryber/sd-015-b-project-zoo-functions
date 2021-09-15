const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const crianca = entrants.filter((idade) => idade.age < 18);
  const adulto = entrants.filter((idade) => idade.age >= 18 && idade.age < 50);
  const senior = entrants.filter((idade) => idade.age >= 50);
  const resultado = { child: crianca.length, adult: adulto.length, senior: senior.length };
  return resultado;
}

function calculateEntry(entrants) {
  // seu código aqui

  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const cliente = countEntrants(entrants);
  const valor = data.prices;
  const valorCrianca = cliente.child * valor.child;
  const valorAdulto = cliente.adult * valor.adult;
  const valorSenio = cliente.senior * valor.senior;
  const valorFinal = (valorCrianca + valorAdulto + valorSenio);
  return valorFinal;
}

module.exports = { calculateEntry, countEntrants };
