const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // recebe: array de visitantes
  // retorna: objeto com a contagem de cada tipo de pessoa - { child: 3, adult: 2, senior: 1 }.
  const child = entrants.filter((entrant) => entrant.age < 18);
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const senior = entrants.filter((entrant) => entrant.age < 18);

  return {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };
}

function calculateEntry(entrants) {
  // recebe objeto gerado na countEntrants e calcula valor a ser pago
  // prices: {
  // adult: 49.99,
  // senior: 24.99,
  // child: 20.99,
}

module.exports = { calculateEntry, countEntrants };

// Pessoas com idade menor que 18 anos são classificadas como crianças (child);
// Pessoas com idade maior ou igual a 18 anos e menor que 50 são classicadas como adultas (adult);
// Pessoas com idade maior ou igual 50 anos são classificadas como pessoas com mais idade (senior).
