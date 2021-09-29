const data = require('../data/zoo_data');

// Funcao para separar as entradas
function separatingEntrants(entrant) {
  if (entrant.age >= 18 && entrant.age < 50) {
    return 'adult';
  }
  if (entrant.age >= 50) {
    return 'senior';
  }
  if (entrant < 18) {
    return 'child';
  }
}

function countEntrants(entrants) {
  // seu código aqui
  const total = {
    adult: 0,
    senior: 0,
    child: 0,
  };
  entrants.forEach((entrant) => {
    total[separatingEntrants(entrant)] += 1;
  });
  return total;
}

function calculateEntry(entrants) {
  // seu código aqui
  const condition = countEntrants(entrants);
  if (condition === 0) { return 0; }

  const {
    adult,
    senior,
    child,
  } = countEntrants(entrants);

  const { prices } = data;
  const totalPrice = (adult * prices.adult) + (senior * prices.senior) + (child * prices.child);
  return totalPrice;
}
module.exports = { calculateEntry, countEntrants };
