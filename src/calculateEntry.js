const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // recebe: array de visitantes
  // retorna: objeto com a contagem de cada tipo de pessoa - { child: 3, adult: 2, senior: 1 }.
  const child = entrants.filter((entrant) => entrant.age < 18);
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const senior = entrants.filter((entrant) => entrant.age >= 50);

  return {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };
}

function calculateEntry(entrants) {
  // recebe objeto gerado na countEntrants e calcula valor a ser pago
  let totalPrice = 0;
  if (!entrants || !entrants.length) {
    return totalPrice;
  }
  const visitors = countEntrants(entrants);
  totalPrice = (visitors.child * data.prices.child)
  + (visitors.adult * data.prices.adult)
  + (visitors.senior * data.prices.senior);
  return totalPrice;
}

module.exports = { calculateEntry, countEntrants };
