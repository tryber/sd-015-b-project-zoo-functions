const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const contador = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      contador.child += 1;
    }
    if (entrant.age < 50 && entrant.age >= 18) {
      contador.adult += 1;
    }
    if (entrant.age >= 50) {
      contador.senior += 1;
    }
  });
  return contador;
}
function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  const contador = countEntrants(entrants);
  const totalChild = contador.child * prices.child;
  const totalAdult = contador.adult * prices.adult;
  const totalSenior = contador.senior * prices.senior;
  const total = totalChild + totalAdult + totalSenior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
