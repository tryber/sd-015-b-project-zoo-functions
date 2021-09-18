const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const criança = entrants.filter((element) => element.age < 18).length;
  const adulto = entrants.filter((elemento) => elemento.age >= 18 && elemento.age < 50).length;
  const Senior = entrants.filter((element) => element.age >= 50).length;
  return { child: criança, adult: adulto, senior: Senior };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }
  const Quantidade = countEntrants(entrants);
  const ValorDeCriança = Quantidade.child * prices.child;
  const ValorDeAdulto = Quantidade.adult * prices.adult;
  const ValorDeSenior = Quantidade.senior * prices.senior;
  const ValorTotal = ValorDeCriança + ValorDeAdulto + ValorDeSenior;
  return ValorTotal;
}

module.exports = { calculateEntry, countEntrants };
