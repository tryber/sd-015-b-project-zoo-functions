const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const kids = entrants.filter((entrada) => entrada.age < 18);
  const adultos = entrants.filter((entrada) => (entrada.age >= 18 && entrada.age < 50));
  const idosos = entrants.filter((entrada) => entrada.age >= 50);
  return { child: kids.length, adult: adultos.length, senior: idosos.length };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const pagantes = countEntrants(entrants);
  const kids = pagantes.child * 20.99;
  const adultos = pagantes.adult * 49.99;
  const idosos = pagantes.senior * 24.99;
  return kids + adultos + idosos;
}

module.exports = { calculateEntry, countEntrants };
