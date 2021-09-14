const data = require('../data/zoo_data');

function calculaEntrada(i) {
  let a = 0;
  let j = 0;
  let s = 0;
  const ages = i.map((x) => x.age);
  ages.forEach((x) => {
    if (x < 18) { j += 1; }
    if (x >= 18 && x < 50) { a += 1; }
    if (x >= 50) { s += 1; }
  });
  return { child: j, adult: a, senior: s };
}
function countEntrants(i) {
  if (i === undefined) {
    return 0;
  } if (i === { }) {
    return 0;
  } if (i.length < 1) {
    return 0;
  }
  return calculaEntrada(i);
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants === {}) { return 0; }
  const pagantes = countEntrants(entrants);
  const kids = pagantes.child * 20.99;
  const adult = pagantes.adult * 49.99;
  const coroa = pagantes.senior * 24.99;
  return (kids + adult + coroa);
}

module.exports = { calculateEntry, countEntrants };
